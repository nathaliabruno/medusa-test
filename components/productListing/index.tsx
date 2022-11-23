import ProductCard from "../productCard";
import { useProducts } from "medusa-react";

const ProductListing = () => {
  const { products, isLoading } = useProducts();

  return isLoading ? (
    "..."
  ) : (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto p-6 w-full">
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
};

export default ProductListing;
