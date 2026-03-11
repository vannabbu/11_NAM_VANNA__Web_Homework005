

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex items-center justify-between">
    
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700">
          
          
        </div>
        <h1 className="text-white font-semibold text-lg tracking-tight">Dashboard</h1>
      </div>

     
      <div className="relative w-full max-w-sm group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full bg-[#161616] border border-transparent rounded-full py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700 transition-all"
          placeholder="Search by item name..."
        />
      </div>
    </header>
  );
}