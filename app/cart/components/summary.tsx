"use client";

import axios from "axios";
import {   useState } from "react";


import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";



interface OrderformProps {
  name : string
  address  : string
  phone : string
}


const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const router = useRouter()
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  const [open , setOpen]=useState(false)

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const formData : OrderformProps = {
      name,
      address,
      phone
    };
    if (!name || !address || !phone  ){
      toast.error("Some fields are missig")
    }else{
      toast.success("Ordering In Process...")
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        productIds: items.map((item) => item.id), formData
      });
      
      setOpen(true)
      removeAll()
    }
  }

  return ( 
    <>
    <Modal open={open} onClose={()=>{setOpen(false) ; router.push('/')} }>
      <div className="text-sm"> <span className="text-xl py-2">Dear {name} ,</span><br></br><span className=" text-gre">Thank you !</span> for choosing Clothify for your fashion needs! We are excited to inform you that we have received your order. Our dedicated team is already working diligently to process your order and ensure that everything is in perfect condition. Rest assured, we will be contacting you shortly to confirm all the details and provide you with an estimated delivery date. If you have any questions or special requests regarding your order, please don't hesitate to reach out to us at <span className="text-gre">{phone}</span> or via email at <span className="text-gre">support@clothifyfashion.com.</span>  Once again, thank you for shopping with Clothify. We can't wait to have you styled in our fabulous pieces! Best regards, The Clothify Team </div>
      </Modal>
    <form
      className="mt-16 rounded-lg sticky  top-5 bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0  lg:p-8"
      onSubmit={onSubmit}
    >

      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
         <Currency value={totalPrice} className="font-bold text-black text-lg	" />
        </div>
        <div className="flex flex-col   gap-5">
            <div className=" w-full  flex flex-col items-center justify-center   gap-5 ">
              <div className=" flex justify-between items-center">  <input placeholder="Name" type="text" className="p-2 sm:w-[200px]"  onChange={(ev :any)=> setName(ev.target.value)} /></div>
              <div className=" flex justify-between  items-center">  <input placeholder="adresse" type="text"className="p-2  sm:w-[200px] "  onChange={(ev :any)=> setAddress(ev.target.value)} /></div>
              <div className=" flex justify-between  items-center">  <input placeholder="Phone Number" type="text" className="p-2  sm:w-[200px]"  onChange={(ev :any)=> setPhone(ev.target.value)} /></div>
            </div>
        </div>
      </div>
    <div className="w-full flex items-center justify-center">
    <button 
        type="submit"
        className="w-1/2 mt-6 py-2 rounded-xl  bg-gre">
        Send Order
      </button>
    </div>
    </form>
    </>
  );

}
 
export default Summary;