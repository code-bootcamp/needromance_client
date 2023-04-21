import styled from "@emotion/styled";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";

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
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  return (
    <div>
      <GoogleLoginButton onClick={() => googleSocialLogin()}>
        <GoogleLogo src="/img/signin/g-logo.png" />
        구글로 로그인하기
      </GoogleLoginButton>
    </div>
  );
}
