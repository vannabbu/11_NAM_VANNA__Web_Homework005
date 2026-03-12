import React from 'react'

export default function back({isShowingSaved,goBack}) {
  return (
        <div>
         {isShowingSaved ? (
           <button 
             onClick={goBack} 
             className="text-xl font-bold flex items-center gap-2  hover:text-blue-300 transition cursor-pointer"
           >
              Back
           </button>
         ) : (
           <h1 className="text-xl font-bold">Back</h1>
         )}
       </div>
  )
}
