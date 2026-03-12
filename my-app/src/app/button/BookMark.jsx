'use client'
import Image from 'next/image'

export default function NarbarProduct({ onBookmarkClick }) {
  return (
    <nav className="flex justify-between items-center border-b border-gray-800 pb-4">
       <h1>Store</h1>
       <button 
         onClick={onBookmarkClick} 
         className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
       >
       </button>
    </nav>
  );
}