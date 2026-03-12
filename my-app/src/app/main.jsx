'use client'
import { useState } from 'react';
import { items } from "../app/data/data";
import NarbarProduct from '../app/product/NarbarProduct';
import ProductList from '../app/product/ProductList';
import Back from '../app/button/back'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons'; 
import {faArrowUpZA} from '@fortawesome/free-solid-svg-icons'; 
import ViewProduct from '../app/button/viewProduct'
export default function Main() {
  const [listProduct, setListProduct] = useState(items);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSave = (id) => {
    setListProduct(prev => prev.map(item => 
      item.id === id ? { ...item, saved: !item.saved } : item
    ));
  };

  const displayProducts = showSavedOnly 
    ? listProduct.filter(p => p.saved) 
    : listProduct;



    const sortAtoZ = () => {
    const sorted = [...listProduct].sort((a, b) => 
      a.item_name.localeCompare(b.item_name)
    );
    setListProduct(sorted);
  };

   const sortZtoA = () => {
    const sorted = [...listProduct].sort((a, b) => 
      b.item_name.localeCompare(a.item_name)
    );
    setListProduct(sorted);
  };

  return (
    <div className="bg-[#0a0a0c] text-white p-6 w-full">
        <nav className='flex justify-between'>
            <div>
                <Back
                  isShowingSaved={showSavedOnly}      
                goBack={() => setShowSavedOnly(false)} 
            />
            </div>

            <div className='flex flex-row gap-10'>
                <NarbarProduct 
                isShowingSaved={showSavedOnly}      
                showSaved={() => setShowSavedOnly(true)} 
                />
            
                 <button 
                    onClick={sortAtoZ}
                    className="mb-4 px-4 py-2 bg-blue-600 rounded-lg text-sm"
                >
                 
                      <FontAwesomeIcon icon={faArrowUpZA} style={{ marginLeft: '0.5rem' }} />
                   
                </button>

                <button 
                    onClick={sortZtoA}
                    className="mb-4 px-4 py-2 bg-blue-600 rounded-lg text-sm"
                >
                       <FontAwesomeIcon icon={faArrowDownZA} style={{ marginLeft: '0.5rem' }} />

                </button>
            </div>
        </nav>
        <div className="w-full mx-auto space-y-6 mt-6">
            {displayProducts.map((item) => ( 
                <ProductList 
                  key={item.id} 
                  products={item} 
                  onToggleSave={() => toggleSave(item.id)}
                  onView={() => setSelectedProduct(item)}  
                />
            ))}
            {selectedProduct && (
        <ViewProduct 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
            )}           
        </div>
        
    </div>
  );
}