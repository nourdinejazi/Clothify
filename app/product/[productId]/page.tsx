import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Container from "@/components/container";
import ProductInfo from "@/components/product-info";
import Nav from "@/components/nav";
import MenuBar from "@/components/menu-bar";
import HeaderPage from "@/components/header-page";
import ProductPageClient from "./components/product-page-client";

interface ProductPageProps {
    params: {
        productId :string
    }
}


export const revalidate = 0


const description = 'designed for style and comfort. Crafted with premium stretch denim, these jeans offer flexibility and durability for all-day wear.effortlessly transitioning from casual to semi-formal occasions. Elevate your fashion game with this contemporary wardrobe essential.'

const ProductPage :React.FC<ProductPageProps> = async({
    params
}) => {
    const product = await getProduct(params.productId)
    const suggested= await getProducts({
        categoryId : product?.category?.id
    })
    return ( 
        <div className="flex  flex-col lg:gap-10 ">
            <HeaderPage title="Product Details" description={description} path={`HOME > COLLECTION > ${product.category.name.toUpperCase()} > PRODUCT DETAILS`} ></HeaderPage>
            <div>
                <ProductPageClient  product={product}   ></ProductPageClient>
            </div>
        </div>
     );
}
 
export default ProductPage;