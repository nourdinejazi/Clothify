import HeaderPage from "@/components/header-page";


const description='a captivating ensemble designed to redefine your fashion experience. This eclectic collection blends modern chic with bohemian flair, offering a fusion of patterns, textures, and vibrant colors. Discover the "UrbanNomad" line, featuring flowy maxi dresses and relaxed jumpsuits, perfect for the free-spirited soul'

const ContactPage = () => {
    return (
        <div className="w-full  ">
            <HeaderPage title="Contact Us"  path="HOME > CONTACT"  description={description} ></HeaderPage>
            <div className="w-full h-[900px]  flex items-center justify-center    bg-[url('/images/aboutus2.svg')] bg-cover bg-center">
                    <div style={{backgroundColor : '#f8f8f8'}}   className=" w-1/2  sm:w-full text-start  sm:text-[14px]  text-bla m-6 p-8 sm:p-4 rounded-xl   ">
                        <p><span className="text-3xl  sm:text-2xl py-2 ">Contact Us <span className="text-gre">Clothify</span> -</span>Got a question, comment, or just want to share some fashion love? We'd love to hear from you!At Clothify, customer satisfaction is at the heart of everything we do. Our dedicated support team is here to assist you with any inquiries you may have. Whether you need help finding the perfect outfit, tracking an order, or have feedback to share, we're just a click or call away. Feel free to reach out to us through our contact form on the website, and we'll respond as quickly as possible. You can also drop us an email at : <span className="text-gre underline ">support@clothifyfashion.com</span> , and one of our friendly team members will get back to you with a smile. Got something more urgent or prefer to chat directly? Give us a ring at <span className="text-gre underline">(123) 456-7890</span> during our business hours, and we'll be delighted to assist you Your satisfaction is our priority, and we value your input as we strive to continually enhance your shopping experience at Clothify. We look forward to connecting with you and ensuring your fashion journey is nothing short of amazing!</p>
                    </div>
           </div>
        </div> 
     );
}
 
export default ContactPage;