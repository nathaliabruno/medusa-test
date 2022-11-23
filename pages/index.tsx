import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { medusaClient } from "../utils/config";
import ProductListing from "../components/productListing";

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    medusaClient.products.list().then(({ products, limit, offset, count }) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Nat Medusa Store</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-centermin-w-screen">
        {console.log(products)}
        <ProductListing />
      </main>
    </>
  );
};

export default Home;
