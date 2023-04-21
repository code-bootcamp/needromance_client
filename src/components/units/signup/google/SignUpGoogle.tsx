import Link from "next/link";
import { useState } from "react";
import BorderInput from "../../../commons/input/Input";
import * as S from "./SignUpGoogle.styles";

interface ISignUpProps {
  inputs: { email: string; id: string; password: string };

  [key: string]: any;
}

export default function SignUpGoogle() {
  const [Nickname, setNickname] = useState<string>("");
  const [isChecking, setIsChecking] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleInput = () => {};

  const checkNicknameDuplicate = () => {};

  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="/img/logo/INR_logo.png" alt="로필 로고" />
          당신의 연애 고민, 저희가 들어드릴게요!
        </S.Logo>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput label="Nickname" placeholder="닉네임을 입력하세요." />
            <S.GreenButton>닉네임 중복검사</S.GreenButton>
            <S.Checker>사용가능한 닉네임입니다.</S.Checker>
            <S.Checker>안타깝게도 중복입니다.</S.Checker>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.SignUpButton isActive={isActive}>SignUp</S.SignUpButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <S.Line />
          <div>구글 로그인 구역</div>
          <div>
            이미 회원이라면
            <Link href={"/signin"}>
              <a>로그인</a>
            </Link>
          </div>
        </S.BottomWrapper>
      </S.SignInWindow>
      로그인 페이지입니다.
    </S.Wrapper>
  );
}
