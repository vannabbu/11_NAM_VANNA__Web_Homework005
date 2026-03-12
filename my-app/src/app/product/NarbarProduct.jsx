export default function NarbarProduct({ isShowingSaved, goBack, showSaved }) {
  return (
    <nav className="clear items-center border-b border-gray-800 pb-4">
      
       <button 
         onClick={showSaved} 
         disabled={isShowingSaved} 
         className={`p-2 rounded-full transition ${isShowingSaved ? 'opacity-50' : 'hover:bg-gray-800'}`}
       >
        <div className="inline">Your Bookmark
        </div>
       </button>
    </nav>
  );
}