import MenuBar from "@/components/menu-bar";
import Nav from "@/components/nav";
import getCategories from "@/actions/get-categories"
import CategoryNav from "@/components/category-nav";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import HeaderPage from "@/components/header-page";




export const revalidate = 0


const Collection = async () => {
    
    const products = await getProducts({})

    const description='a captivating ensemble designed to redefine your fashion experience. This eclectic collection blends modern chic with bohemian flair, offering a fusion of patterns, textures, and vibrant colors. Discover the "UrbanNomad" line, featuring flowy maxi dresses and relaxed jumpsuits, perfect for the free-spirited soul'
    return ( 
    <div className="flex flex-col gap-10  sm:mb-[200px] lg:mb-[300px] md:mb-[300px]">
        <HeaderPage  title="Collection" path="HOME > COLLECTION" description={description}  ></HeaderPage> 
        <div>
            <h1 className="text-3xl text-bla text-bold   text-start pb-8 px-8 ">ALL PRODUCTS</h1>
            <ProductList  items={products} />
         </div>
    </div>
     );
}
 
export default Collection ;