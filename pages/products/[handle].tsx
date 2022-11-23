import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useProducts } from "medusa-react";
import { useCreateLineItem, useCart } from "medusa-react";
import Spinner from "../../components/spinner";

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
        <title>{/*product.title*/} | Nat Medusa Store</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-centermin-w-screen"></main>
    </>
  );
};;;

export default ProductPage;
