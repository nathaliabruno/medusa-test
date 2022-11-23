import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useProducts } from "medusa-react";

const ProductPage: NextPage = () => {
  const { query } = useRouter();

  const { products, isLoading } = useProducts({
    handle: query.handle,
  });

  const product = products[0];

  return (
    <>
      <Head>
        <title>{product.title} | Nat Medusa Store</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-centermin-w-screen"></main>
    </>
  );
};

export default ProductPage;
