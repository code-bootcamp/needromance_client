import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  globalModalState,
} from "../../../../commons/store/atoms";

export default function useAuth() {
  //   const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [modalState, setModalState] = useRecoilState(globalModalState);

  const handleOk = () => {
    setModalState({
      text: "",
      openModal: false,
    });
    router.push("/signin");
  };

  useEffect(() => {
    // 보고 있던 페이지 저장
    localStorage.setItem("prevPage", router.pathname);
    console.log(accessToken);
    if (!accessToken) {
      console.log("hi");
      setModalState({
        text: "로그인이 필요합니다.",
        openModal: true,
        icontype: "warning",
        ok: "확인",
        onClickOk: handleOk,
      });
    }
  }, [accessToken]);
}
