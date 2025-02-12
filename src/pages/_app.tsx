import "@/styles/globals.css";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import ProviderTree from "@/providers/providerTree";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderTree>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderTree>
  )
}

