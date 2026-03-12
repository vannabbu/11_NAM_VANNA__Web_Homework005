

'use client'
import Image from 'next/image';

export default function ViewProduct({ product, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      <div 
        className="absolute inset-0 bg-black/60 " 
        onClick={onClose} 
      />

      <div className="relative bg-[#121214] text-white w-full max-w-md p-6 rounded-xl border border-gray-800 shadow-2xl">
     
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Item Details</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Close
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-sm">
            <span className="font-bold">ID:</span> {product.id}
          </p>
          <p className="text-sm">
            <span className="font-bold">Name:</span> {product.item_name}
          </p>
          <p className="text-sm">
            <span className="font-bold">Price:</span> ${product.item_price}
          </p>
          
          <div className="pt-2">
            <p className="font-bold text-sm mb-1">Description:</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {product.item_description}
            </p>
          </div>
        </div>
      </div>
    </div>)
}
