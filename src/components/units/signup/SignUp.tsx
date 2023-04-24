import Link from "next/link";
import { useState } from "react";
import { checkDuplicateEmail } from "../../../commons/api/test";
import BorderInput from "../../commons/input/Input";
import GoogleSignIn from "../signin/GoogleSignIn";
import * as S from "./SignUp.styles";

interface ISignUpProps {
  inputs: { email: string; id: string; password: string };

  [key: string]: any;
}

export default function SignUp() {
  const [isChecking, setIsChecking] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [inputs, setInputs] = useState<ISignUpProps>({
    inputs: {
      email: "",
      id: "",
      password: "",
    },
  });

  const handleInput = () => {};

  const handleCheckButton = () => {
    setIsChecking(!isChecking);
    checkEmailDuplicate(inputs);
    // 이메일 중복 검사
  };
  const checkEmailDuplicate = (inputs) => {
    // email(input의 value)을 가져온다.
    //
    console.log(checkDuplicateEmail(inputs.email));
  };

  const checkFormValidity = (inputs: ISignUpProps) => {
    for (let key in inputs) {
      if (!inputs[key]) {
        return;
        // 비어있는 칸이 있으면 return
      }
    }
    setIsActive(true);
    // 모두 다 채워졌다면 isActive true
  };

  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
          당신의 연애 고민, 저희가 들어드릴게요!
        </S.Logo>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput label="Email" />
            <S.GreenButton type="button" onClick={handleCheckButton}>
              이메일 중복검사
            </S.GreenButton>
            <S.Checker>사용가능한 이메일입니다.</S.Checker>
          </S.InputWrapper>

          <S.InputWrapper>
            <BorderInput label="Nickname" placeholder="닉네임을 입력하세요." />
            <S.GreenButton>닉네임 중복검사</S.GreenButton>
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput
              label="Password"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput
              label="Password"
              type="password"
              placeholder="비밀번호를 한번 더 입력하세요."
            />
            <S.Checker>비밀번호가 같지 않습니다.</S.Checker>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.SignUpButton isActive={isActive}>SignUp</S.SignUpButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <S.Line />
          {/* <GoogleSignIn /> */}
          <S.SignInLink>
            <Link href={"/signin"}>
              <a>로그인</a>
            </Link>
          </S.SignInLink>
        </S.BottomWrapper>
      </S.SignInWindow>
    </S.Wrapper>
  );
}
