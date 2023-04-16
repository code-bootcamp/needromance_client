import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { breakPoints } from "../../../commons/styles/media";
import LayoutFooter from "./footer/LayoutFooter";
import LayoutHeader from "./header/LayoutHeader";
import LayoutNavigation from "./navigation/LayoutNavigation";
import LayoutTopHeader from "./topheader/LayoutTopHeader";

const MainWrapper = styled.main`
  height: 100%;
  background-color: var(--main-bg-color);
`;

const Wrapper = styled.main`
  max-width: 1200px;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  width: 100%;
`;

interface ILayoutProps {
  children: ReactElement;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_SIDEBAR = ["/", "/boards"];
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <>
      <MainWrapper>
        <Wrapper>
          <LayoutTopHeader />
          <LayoutHeader />
          <LayoutNavigation />
          <Body>{props.children}</Body>
          <LayoutFooter />
        </Wrapper>
      </MainWrapper>
    </>
  );
}
