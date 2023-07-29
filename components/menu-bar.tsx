"use client"

import useCart from "@/hooks/use-cart"
import {ShoppingBag,User2,Heart,Search} from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect,useState } from 'react'

interface MenubarProps{
    className?  :string
}


const MenuBar : React.FC<MenubarProps> = ({
    className
}) => {
    const cart= useCart()
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
    }, []);

    if (!isMounted) {
    return null;
    }

    return ( 
    <div className=" absolute right-0    h-16 flex  items-center justiy-center gap-5 px-4 my-2">
         <button style={{backgroundColor : '#f8f8f8'}}   className=" flex items-center justify-center rounded-full border w-[40px] h-[40px]   text-bla"> <User2 size={20} /> </button>
         <button style={{backgroundColor : '#f8f8f8'}}   className=" flex items-center justify-center rounded-full border w-[40px] h-[40px]   text-bla"> <Heart size={20} /> </button>
         <button style={{backgroundColor : '#f8f8f8'}} onClick={()=>router.push('/cart')}  className="relative flex items-center justify-center rounded-full border w-[40px] h-[40px]   text-bla"> 
             <ShoppingBag size={20} /> 
             <span className=" absolute -top-1 -right-1 bg-gre rounded-full w-[20px] h-[20px] flex items-center justify-center text-sm font-semibold"  >
                {cart.items.length}
            </span>
         </button> 
    </div> 
    );
}
 
export default MenuBar;