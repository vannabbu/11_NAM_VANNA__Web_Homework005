'use client'

import { items } from "../data/data"
import { useState } from 'react';
import Image from 'next/image';
import NarbarProduct from "../product/NarbarProduct"

export default function ProductList() {
  const [listProduct, setListProduct] = useState(items);

  return (

    <>
    
   
    
    <div className=" bg-[#0a0a0c] text-white p-6 font-sans w-full">
        <div className="p-3 pb-6">
            <NarbarProduct/>
       </div>
      <div className="w-full mx-auto space-y-6">
        {listProduct.map((product) => (
          <div 
            key={product.id} 
            className="flex items-center justify-between group transition-all"
          >
          
            <div className="flex items-center gap-5">
              <div className="relative w-24 h-16 shrink-0">
                <Image
                  src={product.image}
                  alt={product.item_name}
                  fill
                  className="object-cover rounded-xl border border-gray-800"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-base tracking-wide">
                    {product.item_name}
                  </h3>
                  <span className="text-gray-400 text-sm font-light">
                    ${product.item_price}
                  </span>
               
                  <button className="ml-1 opacity-80 hover:opacity-100 transition text-2xl">
                    <svg className={`w-4 h-4 ${product.saved ? 'fill-yellow-400' : 'fill-none stroke-gray-400 stroke-2'}`} viewBox="0 0 24 24">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
                  {product.item_description}
                </p>
              </div>
            </div>
            <button className="bg-[#1a1a2e] hover:bg-[#252545] text-blue-300 px-6 py-2 rounded-lg text-sm font-semibold transition-colors border border-transparent hover:border-blue-900/50">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}