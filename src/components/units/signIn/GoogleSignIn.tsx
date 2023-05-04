import styled from "@emotion/styled";
// import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  userProfileState,
} from "../../../commons/store/atoms";

const GoogleLoginButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 45px;
  border-radius: 50px;
  background-color: white;
  border: 1px solid #cccccc;
  color: #505050;
  &:hover {
    cursor: pointer;
  }
`;

const GoogleLogo = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 5%;
`;

export default function GoogleSignIn() {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (user.length !== 0) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUserProfile(res.data);
          setAccessToken(user.access_token);
          const page = localStorage.getItem("prevPage");

          if (page) {
            router.push(String(page));
          } else {
            router.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // console.log(user);
  // console.log(profile);

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (res) => {
      setUser(res);
    },
    onError: (res) => console.log(res, "로그인 실패"),
    // flow: "auth-code",

    // scope: "https://www.googleapis.com/auth/business.manage",
  });

  console.log(user);
  console.log(userProfile);
  return (
    <div>
      <GoogleLoginButton onClick={() => googleSocialLogin()}>
        <GoogleLogo src="/img/signin/g-logo.png" />
        구글로 로그인하기
      </GoogleLoginButton>
    </div>
  );
}
