import '../styles/globals.css'
import { MEDUSA_BACKEND_URL, queryClient } from "../utils/config";
import { MedusaProvider } from "medusa-react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MedusaProvider>
  );
}

export default MyApp
