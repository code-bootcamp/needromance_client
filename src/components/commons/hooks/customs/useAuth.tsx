import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState } from "../../../../commons/store/atoms";

export default function useAuth() {
  //   const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  console.log(router);
  useEffect(() => {
    // 보고 있던 페이지 저장
    localStorage.setItem("prevPage", router.pathname);

    // if (!accessToken) {
    //   console.log("accessToken없음!", accessToken);
    //   router.push("/signin");
    // }
    // 지금 로그인, 로그아웃이 제대로 안 돼서 주석처리 해놨음
  }, []);
}
