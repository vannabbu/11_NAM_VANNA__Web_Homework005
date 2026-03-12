// import Image from "next/image";
import Topbar from "../app/layout/Topbar"
import Sidebar from "../app/layout/Sidebar"
import Main from '../app/main'

export default function Home() {
  return (
    <>
   
    <Topbar/>
    <div className="flex ">
      <Sidebar/>
       <Main/>
    </div>
    
    </>
  );
}
