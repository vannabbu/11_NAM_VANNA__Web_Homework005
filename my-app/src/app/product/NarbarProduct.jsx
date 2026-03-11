export default function NabarProduct(){
    return (
        <>
            <div className=" flex justify-between items-center ">
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition cursor-pointer">
                Back
                </button>
                
                <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white">
                        <span>Your Bookmark</span>
                        <span className="text-lg">||</span>
                    </div>
                    <div className="flex gap-3 text-lg cursor-pointer">
                        <span className="hover:text-white">⇅</span>
                        <span className="hover:text-white">⇄</span>
                    </div>
                </div>
           </div>
    </>
    );
}