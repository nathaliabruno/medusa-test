import Header from "../Header";
import ProductCard from "../ProductCard";

const Layout = ({ children }) => {
  const productData = {
    title: "Test Product",
    url: "#",
    image: { url: "https://via.placeholder.com/300x300.png" },
    price: 2889,
  };
  return (
    <>
      <Header />
      <main>{children}</main>
      <div>
        <ProductCard product={productData} />
      </div>
    </>
  );
};

export default Layout;
