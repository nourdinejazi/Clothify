import { Product } from "@/types";
import NoResults from "./no-results";
import ProductCard from "./product-card";



interface ProductListProps{
    items : Product []
}

const ProductList : React.FC<ProductListProps> = ({
    items
}) => {
    return (
    <>
        <div>
            {items.length ===0 && <NoResults />}
        </div>
        <div className=" flex flex-wrap  items-center justify-center  gap-7 ">
        {items.map((item)=>(
            <div key={item.id} className="   flex items-center justify-center ">
                <ProductCard key={item.id} data={item} />
            </div>
        ))}     
        </div>
    </> 

     );
}
 
export default ProductList;