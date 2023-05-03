import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layouts";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RecoilRoot, useRecoilState } from "recoil";
import { SessionProvider } from "next-auth/react";
import CustomModal from "../src/components/commons/modals/CustomModal";
import { authModalState } from "../src/commons/store/atoms";
// const [isAuthModalOpen, setIsAuthModalOpen] = useRecoilState(authModalState);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <RecoilRoot>
        <SessionProvider session={session}>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
          >
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* <CustomModal text="" openModal={isAuthModalOpen} /> */}
          </GoogleOAuthProvider>
        </SessionProvider>
      </RecoilRoot>
    </>
  );
}
