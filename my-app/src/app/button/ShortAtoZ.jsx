export default function shortAtoZ(handal){

    return(
        
        <button 
            onClick={handal}
            className="flex items-center gap-2 bg-[#1a1a2e] border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-[#252545] transition"
            >
            <span>Sort A-Z</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
       </button>
        
    );
}