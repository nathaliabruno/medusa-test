import ProductCard from "../productCard";
import { useProducts } from "medusa-react";
import Spinner from "../spinner";

const ProductListing = ({ params }) => {
  const { products, isLoading } = useProducts({
    collection_id: params.collection_id,
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto p-6 w-full">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ProductListing;
