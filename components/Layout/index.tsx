import { useCart } from "medusa-react";
import { useEffect } from "react";
import { medusaClient } from "../../utils/config";
import Header from "../header";

const Layout = ({ children }) => {
  const { setCart } = useCart();

  useEffect(() => {
    const localCartId = localStorage.getItem("cart_id");
    localCartId
      ? medusaClient.carts.retrieve(localCartId).then(({ cart }) => {
          setCart(cart);
        })
      : medusaClient.carts.create().then(({ cart }) => {
          localStorage.setItem("cart_id", cart.id);
          setCart(cart);
        });
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
