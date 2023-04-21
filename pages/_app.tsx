import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layouts";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleOAuthProvider>
    </>
  );
}
