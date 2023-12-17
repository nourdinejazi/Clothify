import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/icon-button";
import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";


interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return ( 
    <li className="flex sm:flex-col justify-center  items-center py-6 border-b border-gre">
      <div className="relative   rounded-md overflow-hidden  h-[250px]  w-[250px]">
      <div className="absolute z-10 right-0 top-0 p-1">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-center items-center ">
        <div className="relative  flex flex-col justify-center pt-2 items-center gap-2">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
 
export default CartItem;