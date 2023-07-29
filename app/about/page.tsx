import HeaderPage from "@/components/header-page";


const description='a captivating ensemble designed to redefine your fashion experience. This eclectic collection blends modern chic with bohemian flair, offering a fusion of patterns, textures, and vibrant colors. Discover the "UrbanNomad" line, featuring flowy maxi dresses and relaxed jumpsuits, perfect for the free-spirited soul'

const AboutPage = () => {
    return (
        <div className="w-full ">
            <HeaderPage title="About Us"  path="HOME > ABOUT US"  description={description} ></HeaderPage>
            <div className="w-full  h-[900px] flex items-center justify-center    bg-[url('/images/aboutus2.svg')] bg-cover bg-center">
                    <div style={{backgroundColor : '#f8f8f8'}}   className=" w-1/2  sm:w-full text-start   text-bla m-6 p-8 sm:p-4 rounded-xl   ">
                        <span className="text-3xl  sm:text-2xl p-2 ">Welcome to <span className="text-gre">Clothify</span> -</span> Where Fashion Meets Expression! At Clothify, we believe that clothing goes beyond just covering the body; it is an art form that allows you to express your personality, creativity, and individuality. Established with a passion for style and a commitment to quality, Clothify is your ultimate fashion destination.Our carefully curated collection features an array of trendy and timeless pieces, designed to cater to diverse tastes and preferences. From chic and sophisticated to casual and contemporary, we strive to offer something for everyone. Our team of fashion enthusiasts is constantly on the lookout for the latest trends, ensuring that you stay ahead in the style game.Quality is the cornerstone of Clothify. We collaborate with reputable designers and trusted suppliers to bring you garments made from the finest fabrics and materials. Each piece is crafted with attention to detail, promising not only stylish looks but also durability to withstand the test of time.   
                    </div>
           </div>
        </div> 

     );
}
 
export default AboutPage;