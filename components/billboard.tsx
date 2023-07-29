"use client"

import { Billboard  } from "@/types";

import MenuBar from "./menu-bar";
import Nav from "./nav";


interface BillboardProps {
  homebill: Billboard;
  homebillf:Billboard
}

const HomeBillboards : React.FC<BillboardProps>= ({
    homebill,
    homebillf
}) => {
  return (  
        <div className="flex sm:flex-col  md:flex-col lg:flex-row  relative   w-full ">
            <MenuBar />
            <Nav className="text-white" />
         <div style={{backgroundImage  : `url(${homebill?.imageUrl})`}} className="h-screen  lg:w-1/2 flex flex-col justify-end  items-center    bg-cover   sm:bg-center ">
            <div className=" mb-32 w-1/2 text-gre p-8 rounded-xl  bg-black bg-opacity-20    ">
                <div className="flex flex-col items-center text-center gap-5 	  ">
                        <h2 className="text-bold">NEW ARRIVAL!</h2>
                        <h1 className="text-bold text-3xl">Men Collections</h1>
                    <p className="text-sm">
                    offers a diverse range of stylish and comfortable apparel.
                    </p>
                    <button className="p-4  sm:p-2  bg-transparent border-2 border-gre rounded-3xl    ">SHOP MEN</button>
                </div>
            </div>
         </div> 
         <div style={{backgroundImage  : `url(${homebillf?.imageUrl})`}} className="h-screen lg:w-1/2 flex flex-col justify-end items-center   bg-cover    sm:bg-center ">
            <div className="   mb-32 w-1/2 text-gre p-8 rounded-xl  bg-black bg-opacity-20    ">
                    <div className="flex flex-col items-center text-center gap-5 	  ">
                        <h2 className="text-bold">NEW ARRIVAL!</h2>
                        <h1 className="text-bold text-3xl">Women Collections</h1>
                        <p className="text-sm">
                        showcases a wide array of trendy and chic clothing.
                        </p>
                        <button className="p-4 sm:p-2 bg-transparent border-2 border-gre rounded-3xl    ">SHOP WOMEN</button>
                    </div>
                </div>
         </div>
        </div>
   );
};

export default HomeBillboards;