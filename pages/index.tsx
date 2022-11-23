import type { NextPage } from "next";
import Head from "next/head";
import ProductListing from "../components/productListing";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nat Medusa Store</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-centermin-w-screen">
        <ProductListing />
      </main>
    </>
  );
};

export default Home;
