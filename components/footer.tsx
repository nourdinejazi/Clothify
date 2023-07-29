
import { FaFacebookF,FaInstagram,FaTiktok, FaPinterestP,FaTwitter } from "react-icons/fa";

const Footer=()=>{
   
    return (
        <footer className="bg-black text-white mt-32">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:p-16  ">
                <div className="py-4 px-8 text-zinc-500">
                    <ul className="lg:flex flex-col gap-5 ">
                        <li className="text-white">Promotions</li>
                        <li>Gift Cards</li>
                        <li>Stores</li>
                        <li>Store Directory</li>
                        <li>Preferred Loyalty Program</li>
                        <li>20% First Responder Discount</li>
                    </ul>
                </div>
                <div className="py-4 px-8 text-zinc-500">
                    <ul className="lg:flex flex-col gap-5">
                        <li className="text-white">Help</li>
                        <li>FAQs</li>
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Accessibility</li>
                        <li className="text-white">Contact us</li>
                        <li>Email</li>
                        <li>Call Us:123.456.7890</li>
                        <li>Chat</li>
                    </ul>
                </div>
                <div className="sm:col-span-2     py-4 px-8 text-zinc-500">
                    <ul className="lg:flex flex-col gap-5">
                        <li className="text-white">About</li>
                        <li>About Ourbrand</li>
                        <li>Careers</li>
                        <li>Privacy Commitment</li>
                        <li>Sustainability</li>
                        <li>Explore</li>
                        <li>#OURBRAND</li>
                    </ul>
                </div>
                <div className="sm:col-span-2  sm:border-t border-white  py-4 px-8">
                    <p>Sign Up & Save 10% on Your Purchase</p>
                    <p className="text-zinc-500 text-sm">Subscribe for news on our latest arrivals, exclusive promotions and events.</p>
                    <button className="py-2 bg-white text-black w-full  my-8 ">Save 10% on Your Purchase Today</button>
                    <p className="text-zinc-500 text-sm">Sign up for mobile texts to receive offer. Never miss out on exclusive launches, styles and promotions <a href="">Details</a>.</p>
                    <div className=" sm:col-span-2 w-full  flex  justify-center gap-5  py-4  ">
                        <FaInstagram size={20}></FaInstagram>
                        <FaTiktok size={20}></FaTiktok>
                        <FaFacebookF size={20}></FaFacebookF>
                        <FaTwitter size={20}></FaTwitter>
                        <FaPinterestP size={20}></FaPinterestP>
                    </div>
                </div>

                <div className="col-span-2 w-full  px-4 pt-2 lg:pt-8 pb-8 ">
                    <h1 className="text-xl ">OURBRAND</h1>
                    <p className="text-sm text-zinc-500"><a href="">CA Transparency In Supply Chain & UK Modern Slavery Statement</a> |<a href=""> Privacy Policy</a> | <a href="">Interest Based Ads</a> | <a href="">Do Not Sell or Share My Personal Information</a> | <a href="">Terms & Conditions</a>| <a href="">Copyright © 2023 OURBRAND. All rights reserved.</a></p>
                </div>
            </div>        
        </footer>
    )
}

export default Footer;