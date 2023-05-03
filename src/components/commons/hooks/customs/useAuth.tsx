import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  authModalState,
} from "../../../../commons/store/atoms";
import CustomModal from "../../modals/CustomModal";

export default function useAuth() {
  //   const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useRecoilState(authModalState);

  useEffect(() => {
    // 보고 있던 페이지 저장
    localStorage.setItem("prevPage", router.pathname);

    if (!accessToken) {
      setIsAuthModalOpen(true);
      // router.push("/signin");
    }

    console.log(isAuthModalOpen);
  }, [accessToken]);

  return (
    <>
      {isAuthModalOpen && (
        <CustomModal
          text="로그인이 필요합니다."
          icontype="warning"
          openModal={isAuthModalOpen}
          ok="확인"
          onClickCancel={() => setIsLoginModalOpen(false)}
        />
      )}
    </>
  );
}
