import ProductCard from "../productCard";

const ProductListing = ({}) => {
  const productData = {
    title: "Test Product",
    url: "#",
    image: { url: "https://via.placeholder.com/300x300.png" },
    price: 2889,
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto p-6 w-full">
      <ProductCard product={productData} />
    </section>
  );
};

export default ProductListing;
