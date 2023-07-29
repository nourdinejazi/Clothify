import HeaderPage from "@/components/header-page";
import CartClient from "./components/cart-client";
export const revalidate = 0;

const CartPage = () => {

  const description="At Clothify, we strive to provide you with an exceptional shopping experience, and our Cart Page is no exception. This is where the magic happens, as you prepare to make your fashion dreams a reality. Whether you're a trendsetter or a fashion enthusiast, our Cart Page is designed with your convenience and satisfaction in mind."
  return (
    <div className="flex flex-col gap-10">
        <HeaderPage  title='Cart' description={description} path='HOME > CART' />
        <CartClient />
    </div>
  )
};

export default CartPage;