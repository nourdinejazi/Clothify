import getCategories from "@/actions/get-categories"
import MenuBar from "./menu-bar"
import Nav from "./nav"
import CategoryNav from "./category-nav"

interface HeaderPageProps{
    title: string
    description : string
    path : string
}

const  HeaderPage :React.FC<HeaderPageProps> = async({
    title,
    description,
    path
}) => {

    const categories = await getCategories();
    return ( 
        <div className="flex items-center flex-col gap-10 w-full h-[600px]   ">
        <div className="h-full border  w-full relative  " style={{backgroundColor : '#f8f8f8'}}>
            <MenuBar />
            <Nav  className="text-black"/>
            <div className="w-full h-full  flex items-center justify-center ">
                    <div className="flex flex-col items-center gap-5 text-center md:w-[30%] lg:w-[30%]">
                            <p className="text-xl" >{path}</p>
                            <h1 className="text-2xl">{title}</h1>
                            <div className="text-sm text-center p-2">
                                <p>{description} </p>
                            </div>
                            <CategoryNav  data={categories}  />
                    </div>
            </div>
        </div>
    </div>
     );
}
 
export default HeaderPage;