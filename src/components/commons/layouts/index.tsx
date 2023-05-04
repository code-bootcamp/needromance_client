import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { globalModalState } from "../../../commons/store/atoms";
import { breakPoints } from "../../../commons/styles/media";
import CustomModal from "../modals/CustomModal";
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
  const [modalState] = useRecoilState(globalModalState);

  const HIDDEN_PAGE = ["/signin", "/signup"];
  const isHidden = HIDDEN_PAGE.includes(router.asPath);
  return (
    <>
      <MainWrapper>
        <Wrapper>
          {!isHidden && (
            <>
              <LayoutTopHeader />
              <LayoutHeader />
              <LayoutNavigation />
            </>
          )}
          <Body>{props.children}</Body>
          {!isHidden && <LayoutFooter />}
        </Wrapper>
        <CustomModal
          text={modalState?.text}
          openModal={modalState.openModal}
          icontype={modalState.icontype}
          ok={modalState.ok}
          cancel={modalState.cancel}
          confirm={modalState.confirm}
          onClickOk={modalState.onClickOk}
          onClickCancel={modalState.onClickCancel}
          onClickConfirm={modalState.onClickConfirm}
        />
      </MainWrapper>
    </>
  );
}
