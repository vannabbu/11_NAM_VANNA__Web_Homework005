'use client'
import Image from 'next/image'

export default function ProductList({ products, onToggleSave ,onView }) {

  const isSaved = products.saved;

  return (
    <div className="w-full mx-auto space-y-6 flex justify-between">
      <div className="flex items-center gap-5">
        <div className="relative w-24 h-16 shrink-0">
          <Image
            src={products.image}
            alt={products.item_name}
            fill
            className="object-cover rounded-xl border border-gray-800"
          />
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-base">{products.item_name}</h3>
            <span className="text-gray-400 text-sm">${products.item_price}</span>
          
            <button onClick={onToggleSave} className="ml-1 opacity-80 hover:opacity-100 transition">
              <svg 
                className={`w-5 h-5 transition-colors ${isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400 fill-none'}`} 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
          <p className="text-gray-500 text-sm max-w-md">{products.item_description}</p>
        </div>
      </div>
      <button 
        onClick={onView} 
        className="bg-[#1a1a2e] text-blue-300 p-4 rounded-lg text-sm font-semibold "
      >
        View
      </button>
    </div>
  );
}