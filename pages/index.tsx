import { StoreGetProductsParams } from "@medusajs/medusa";
import type { NextPage } from "next";
import Head from "next/head";
import ProductListing from "../components/productListing";
import { useState } from "react";
import CollectionFilter from "../components/collectionsList";
const Home: NextPage = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({});
  return (
    <>
      <Head>
        <title>Nat Medusa Store</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-centermin-w-screen">
        <CollectionFilter
          collectionFilter={params}
          setCollectionFilter={setParams}
        />
        <ProductListing params={params} />
      </main>
    </>
  );
};

export default Home;
