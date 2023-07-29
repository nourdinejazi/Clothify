import { Facebook, Instagram, Twitter  } from "lucide-react";



const Footer=()=>{
   
    return (
        <footer  style={{backgroundColor : '#f8f8f8'}}  className="w-full h-[400px] relative border-t border-gre flex flex-col gap-7   " >
            <div className="sm:flex sm:flex-col  lg:flex justify-center items-center">
                <div className="text-center w-1/3 sm:w-full sm:text-sm    flex flex-col gap-5">
                    <p className="text-2xl pt-4">Stay In Touch</p>
                    <p className=" text-sm   p-4">
                    Stay in the fashion loop and never miss a stylish beat! Join our Clothify community by subscribing to our newsletter and following us on social media. By doing so, you'll be the first to know about our latest collections, exclusive promotions, fashion tips, and more. Be a part of the Clothify family and let's stay connected as we embark on this fashionable journey together!
                    </p>
                </div>
            </div>   

            <div className="sm:flex sm:flex-col  lg:flex justify-center items-center ">
                <div className=" flex gap-5 text-gre  cursor-pointer">
                    <Facebook ></Facebook>
                    <Instagram></Instagram>
                    <Twitter></Twitter>
                </div>
            </div>

            <div className="  absolute flex items-center justify-center     bottom-0 w-full  text-bla bg-gre h-12">
                © {new Date().getFullYear()}  CLOTHIFY. ALL RIGHT RESERVED 
            </div>
        </footer>
    )
}

export default Footer;