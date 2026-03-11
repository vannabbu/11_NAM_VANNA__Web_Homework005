// import Image from "next/image";
import Topbar from "../app/layout/Topbar"
import Sidebar from "../app/layout/Sidebar"
import ProductList from "../app/product/ProductList"

export default function Home() {
  return (
    <>
   
    <Topbar/>
    <div className="flex ">
      <Sidebar/>
     <ProductList/>
    </div>
    
    </>
  );
}
