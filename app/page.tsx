import Info from "@/components/info";
import HomeBillboards from "@/components/billboard";
import {
  Truck,
  MessageCircle,
  CreditCard,
  BadgeDollarSign,
} from "lucide-react";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import InfoBox from "@/components/info-box";
import getCategories from "@/actions/get-categories";
import CategoryNav from "@/components/category-nav";
import Link from "next/link";

export default async function Home() {
  const homebill = await getBillboard("05557254-777b-4f53-ab36-f6975060663b");
  const homebillf = await getBillboard("d4d37f40-8e45-484a-8e73-025a715f81d9");

  const pagebill = await getBillboard("c88161a4-7ccf-405e-aa99-f22dcba49653");

  const productsMen = await getProducts({ gender: "Men" });
  const productsWomen = await getProducts({ gender: "Woman" });
  const categories = await getCategories();
  return (
    <div className="flex flex-col relative w-full h-full mb-32  ">
      <Info />
      <HomeBillboards homebill={homebill} homebillf={homebillf} />
      <div className="bg-whi flex flex-col gap-10  w-full h-auto ">
        <div className="w-full  flex  lg:order-2  md:order-2   items-center justify-center">
          <div className="lg:w-1/3 sm:w-full md:w-1/2 text-bla p-8 rounded-xl     ">
            <div className="flex flex-col items-center text-center gap-5 	  ">
              <h1 className="text-bold text-3xl">Men Collections</h1>
              <p className="text-sm text-center ">
                Step into a world where style meets versatility, where classic
                sophistication merges seamlessly with contemporary fashion.
              </p>
              <button className="p-4 bg-transparent border-2 border-bla rounded-3xl    ">
                <Link href="/collection">SHOP MAN</Link>
              </button>
              <div>
                <CategoryNav data={categories} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex   lg:order-3  md:order-3 px-2 items-center justify-center  ">
          <div className=" w-full ">
            <ProductList items={productsMen} />
          </div>
        </div>
        <div className="w-full   flex lg:flex-row md:flex-row  sm:flex-col lg:order-4 md:order-4 ">
          <div
            style={{ backgroundImage: `url(${pagebill?.imageUrl})` }}
            className="  lg:w-[40%] md:w-[40%] sm:h-[850px] lg:h-[1000px] md:h-[1000px]  bg-center bg-cover"
          ></div>
          <div
            style={{ backgroundColor: "#f8f8f8" }}
            className="lg:w-[60%] md:w-[60%] flex justify-start  items-center text-bla p-8 "
          >
            <div className="flex flex-col items-center text-center gap-5 	  ">
              <h2 className="text-bold">About Clothify</h2>
              <h1 className="text-bold text-3xl">
                We Deliver Best Quality Clothing All over The World
              </h1>
              <p className="text-sm">
                Step into the world of VogueVerse, where fashion becomes an art
                form and self-expression knows no boundaries. Our eclectic
                clothing store is a haven of style, carefully curated to cater
                to every taste and personality. With an unwavering commitment to
                quality craftsmanship, our garments not only make bold fashion
                statements but also ensure comfort and durability. Embracing
                diversity and inclusivity, our unisex lines celebrate
                individuality, providing fashion choices that transcend
                traditional norms.
              </p>
              <button className="p-2 bg-transparent border-2 border-bla rounded-3xl   ">
                <Link href="/about">Know More About Us</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex   lg:order-1 md:order-1 justify-center items-center flex-row gap-10  flex-wrap lg:pt-32 md:pt-32 ">
          <InfoBox
            title="Fast Delivery"
            description="Clothify store boasts a fast delivery service, ensuring your purchases reach your doorstep in record time."
            icon={<Truck size={25} />}
          />
          <InfoBox
            title="Secure SSL"
            description="Clothify secure SSL service, ensuring your online transactions and personal information are protected."
            icon={<MessageCircle size={25} />}
          />
          <InfoBox
            title="Paypal Or ApplePay"
            description="Clothify offers convenient payment options through PayPal and Apple Pay, making your transactions seamless and effortless."
            icon={<CreditCard size={25} />}
          />
          <InfoBox
            title="Get Discounts"
            description="Clothify offers a discount service, providing attractive deals and savings on a variety of products."
            icon={<BadgeDollarSign size={25} />}
          />
        </div>
        <div className="w-full  flex  lg:order-5  md:order-5   items-center justify-center">
          <div className="lg:w-1/3 sm:w-full md:w-1/2 text-bla p-8 rounded-xl     ">
            <div className="flex flex-col items-center text-center gap-5 	  ">
              <h1 className="text-bold text-3xl">Women Collections</h1>
              <p className="text-sm text-center ">
                Step into a world where style meets versatility, where classic
                sophistication merges seamlessly with contemporary fashion.
              </p>
              <button className="p-4 bg-transparent border-2 border-bla rounded-3xl    ">
                <Link href="/collection">SHOP WOMEN</Link>
              </button>
              <div>
                <CategoryNav data={categories} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex   lg:order-6  md:order-6 px-2 items-center justify-center ">
          <div className=" w-full ">
            <ProductList items={productsWomen} />
          </div>
        </div>
      </div>
    </div>
  );
}
