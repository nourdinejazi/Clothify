"use client"

import { Product } from "@/types";
import { Badge } from "@/components/badge";
import Currency from "./currency";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import {MouseEventHandler} from "react"

interface ProductInfoProps {
    data : Product
}


const ProductInfo : React.FC<ProductInfoProps> = ({
    data
}) => {

    const cart = useCart()

    const onAddToCart : MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation()
        cart.addItem(data)
    }

    return (
        <div className=" h-full mb-16    w-full   ">
            <div className="flex flex-col justify-center items-center gap-5 p-8">
                <div><Badge variant="default">ON SALE NOW</Badge></div>
                <p className="underline">{data.category.name}</p>
                <p className="text-2xl sm:text-center">{data.name}</p>
                <Currency className="text-xl text-bla" value={data.price} />
                <p className="text-sm text-neutral-500 sm:w-full  md:w-full lg:w-1/2    text-center">
                we prioritize quality and safety in every aspect of our service. The LuxeLinen Maxi Dress undergoes meticulous craftsmanship, using premium linen fabric that ensures durability and long-lasting wear. Our team of skilled artisans pays attention to every detail, ensuring a flawless finish and impeccable stitching.To guarantee safe delivery, we partner with reputable shipping providers renowned for their reliability and care. Each dress is carefully packaged in protective materials.
                </p>
                <div className="flex gap-2">Color : <div className="rounded-full w-6 h-6" style={{backgroundColor : data.color.value}}></div></div>
                <div>Size : {data.size.name} </div>
                <hr />
                <div>
                    <button  onClick={onAddToCart} className="bg-gre px-4 py-2 rounded-xl text-bold flex items-center justify-center gap-2">
                        <span>ADD TO CART </span><ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
      );
}
 
export default ProductInfo;