import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useProducts } from "medusa-react";
import { useCreateLineItem, useCart } from "medusa-react";
import Spinner from "../../components/spinner";
import ProductGallery from "../../components/productGallery";
import ProductInfo from "../../components/productInfo";

const ProductPage: NextPage = () => {
  const { query } = useRouter();

  const { cart } = useCart();

  const { mutate } = useCreateLineItem(cart?.id!);

  const { products, isLoading } = useProducts({
    handle: query.handle,
  });

  if (!products) {
    return <Spinner />;
  }
  const product = products[0];

  return (
    <>
      <Head>
        <title>{product.title} | Nat Medusa Store</title>
      </Head>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-centermin-w-screen">
        <div className="flex flex-row min-w-full">
          <ProductGallery
            className="flex flex-col w-full basis-1/2 bg-gray-300"
            gallery={product.images}
          />
          <ProductInfo
            className="flex flex-col w-full basis-1/2 px-40 py-20"
            product={product}
          />
        </div>
      </main>
    </>
  );
};;;

export default ProductPage;
