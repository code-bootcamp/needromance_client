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
    localStorage.setItem("prevPage", router.asPath);
    router.push("/signin");
  };

  useEffect(() => {
    if (!accessToken) {
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
