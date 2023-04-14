import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layouts";
import { globalStyles } from "../src/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </>
  );
}
