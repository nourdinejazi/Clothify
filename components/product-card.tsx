"use client"
import Image from "next/image";
import { Product } from "@/types";
import IconButton from "./icon-button";
import {MouseEventHandler} from "react"
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import PreviewModal from "./preview-modal";
import useCart from "@/hooks/use-cart";
interface ProductCardProps{
    data : Product
}



const ProductCard : React.FC<ProductCardProps> = ({
    data
}) => {
    
    const router = useRouter()

    const PreviewModal= usePreviewModal()
    const cart= useCart()

    const handleClick= ()=>{
        router.push(`/product/${data?.id}`)
    }

    const onPreview : MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation()
        PreviewModal.onOpen(data)
    }

    const onAddToCart : MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation()
        cart.addItem(data)
    }


    return ( 
    <div>
        <div onClick={handleClick} className=" w-[300px]     group flex flex-col  cursor-pointer">
            <div className=" relative ">
                <Image 
                src={data.images?.[0]?.url} 
                alt="image" 
                height={500}
                width={300}
                className=""
                />
                <div className=" flex flex-col gap-2  lg:opacity-0 lg:group-hover:opacity-100 lg:transition absolute  px-4 top-5 right-0 ">
                    <IconButton  
                    onClick={onPreview}
                    icon={<Expand size={15} />}
                    />
                    <IconButton  
                    onClick={onAddToCart}
                    icon={<ShoppingCart size={15} />}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1 p-2    ">
                <h3 className="text-sm text-gre underline">{data?.category?.name}</h3>
                <div>
                    <h2 className="">{data?.name}</h2>
                </div>
                <div className="">
                    <p className=" ">
                        <Currency value={data?.price}  />
                    </p>
            </div>
            </div>
        </div>
    </div>
     );
}
 
export default ProductCard;