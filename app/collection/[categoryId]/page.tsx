import MenuBar from "@/components/menu-bar";
import Nav from "@/components/nav";
import getCategories from "@/actions/get-categories"
import CategoryNav from "@/components/category-nav";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";
import Filter from "./components/filter";
import getColors from "@/actions/get-colors";
import HeaderPage from "@/components/header-page";
import MobileFilter from "./components/mobile-filter";


interface CategoryPageProps {
    params : {
        categoryId : string
    }
    searchParams :{
        colorId : string
        sizeId : string
    }
}

export const revalidate = 0

const CategoryPage : React.FC<CategoryPageProps>= async ({
    params ,
    searchParams
}) => {

    const categories = await getCategories();
    const category = await getCategory(params.categoryId)
    const sizes = await getSizes()
    const colors = await getColors()
    const description= 'a captivating ensemble designed to redefine your fashion experience. This eclectic collection blends modern chic with bohemian flair, offering a fusion of patterns, textures, and vibrant colors. Discover the "UrbanNomad" line, featuring flowy maxi dresses and relaxed jumpsuits, perfect for the free-spirited soul.'
    const products = await getProducts({ 
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
      });
    

    

    return ( 
        <div className="flex flex-col gap-10 ">
        <HeaderPage  title={category.name} description={description} path={`HOME > COLLECTION > ${category.name}`} ></HeaderPage>

        <div className="flex  sm:flex-col    gap-10  w-full p-8">
            <div>   
                <Filter
                    valueKey="sizeId" 
                    name="Sizes" 
                    data={sizes}
                />
                <Filter
                    valueKey="colorId" 
                    name="Colors" 
                    data={colors}
                />

            </div>
            <hr className="bg-gre h-full w-[2px]" />
            <div className="w-full flex flex-col sm:items-center sm:justify-center ">
                <h1 className="text-3xl text-bla text-bold  text-start pb-8">{category.name}</h1>
                <ProductList  items={products} />
            </div>
        </div>

        </div>
     );
}
 
export default CategoryPage ;