"use client";
import { Product } from "@/types";
import HeaderPage from "@/components/header-page";
import ProductInfo from "@/components/product-info";
import Gallery from "@/components/gallery";
import { Tab, Transition } from "@headlessui/react";

interface ProductPageClientProps {
  product: Product;
}

const ProductPageClient: React.FC<ProductPageClientProps> = ({ product }) => {
  return (
    <div className="w-full h-full ">
      <Tab.Group>
        <Tab.Panels>
          <Tab.Panel>
            <Gallery images={product.images} />
          </Tab.Panel>
          <Tab.Panel>
            <ProductInfo data={product} />
          </Tab.Panel>
        </Tab.Panels>
        <Tab.List
          className={`fixed bottom-0 border-t border-gre    bg-white  w-full`}
        >
          <div className=" flex justify-center gap-5 items-center h-[70px] ">
            <Tab
              className={`ui-selected:bg-gre border border-gre  rounded-xl my-2  px-4 h-[70%] focus:outline-none`}
            >
              Gallery
            </Tab>
            <Tab
              className={`ui-selected:bg-gre border border-gre  rounded-xl my-2  px-4 h-[70%] focus:outline-none   `}
            >
              Product Info
            </Tab>
          </div>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default ProductPageClient;
