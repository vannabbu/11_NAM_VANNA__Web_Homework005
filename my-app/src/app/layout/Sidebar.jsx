

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#121212] p-6 flex flex-col gap-8 border-r border-gray-800 h-screen">
      <nav className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Menu</p>
      </nav>
      <div className="p-3  rounded">Overview</div>
      <div className="p-3  rounded">Items</div>
      <div className="p-3  rounded">Order</div>
      <div className="p-3  rounded">Customers</div>
       <div className="p-3  rounded">Setting</div>
    </aside>
  );
}