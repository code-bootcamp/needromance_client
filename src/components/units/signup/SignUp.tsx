import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

// api
import {
  checkDuplicateEmail,
  checkDuplicateNickname,
  checkVerificationEmail,
  sendVerificationEmail,
  signUp,
} from "../../../commons/api/test";

// components
import BorderInput from "../../commons/input/Input";
import Loader from "../../commons/loader/Loader";
import GoogleSignIn from "../signin/GoogleSignIn";

// styles
import * as S from "./SignUp.styles";

interface ISignUpProps {
  email: string;
  nickname: string;
  password: string;
  password2: string;

  [key: string]: any;
}

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [emailChecker, setEmailChecker] = useState("");
  const [nicknameChecker, setNicknameChecker] = useState("");
  const [isEmailChecking, setIsEmailChecking] = useState(false);
  const [validatePassword, setValidatePassword] = useState("");
  const [isEmailVerifying, setIsEmailVerifying] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [inputs, setInputs] = useState<ISignUpProps>({
    email: "",
    nickname: "",
    password: "",
    password2: "",
  });
  const [token, setToken] = useState("");

  // inputs, email 인증에 따라 체크
  useEffect(() => {
    checkFormValidity();
  }, [inputs, isEmailVerified]);

  // token 설정되고 바로 인증 가능
  useEffect(() => {
    handleCheckVerificationButton();
  }, [token]);

  // 비밀번호, 비밀번호 확인 일치여부
  useEffect(() => {
    if (inputs.password === "") {
      setValidatePassword("");
      return;
    } else if (inputs.password === inputs.password2) {
      setValidatePassword("비밀번호가 일치합니다.");
    } else if (inputs.password !== inputs.password2) {
      setValidatePassword("비밀번호가 일치하지 않습니다.");
      setIsActive(false);
    }
  }, [inputs.password, inputs.password2]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 이메일 중복 검사
  const handleEmailCheckButton = async () => {
    if (!inputs.email) return;
    const data = await checkDuplicateEmail(inputs.email);
    if (data === true) {
      setEmailChecker("사용가능한 이메일입니다.");
      setIsEmailChecking(true);
      // 인증 화면 on,,
    } else {
      setEmailChecker("이미 가입된 이력이 있습니다.");
    }
  };

  const handleSendVerificationButton = async () => {
    // 인증번호 전송을 누르면,
    setIsLoading(true);
    const data = await sendVerificationEmail(inputs.email);
    // 상태코드로 확인이 가능하다...
    // /다시 요청해주세요
    setIsLoading(false);

    if (data === "OK") {
      setIsEmailVerifying(true);
    } else {
      alert("다시 시도해주세요.");
      // modal
    }
  };

  // 이메일 인증에서 '확인' 눌렀을 때
  const handleCheckVerificationButton = async () => {
    const data = await checkVerificationEmail(inputs.email, token);

    if (data) {
      setIsEmailVerifying(false); // 인증하는 화면 사라져!
      setIsEmailVerified(true); // 인증 완료
    }
  };

  // 닉네임 중복 검사
  const handleNicknameCheckButton = async () => {
    const data = await checkDuplicateNickname(inputs.email);
    if (data) {
      setNicknameChecker("사용가능한 닉네임입니다.");
    } else {
      setNicknameChecker("안타깝게도 중복인 닉네임입니다.");
    }
  };

  const checkFormValidity = () => {
    for (let key in inputs) {
      if (!inputs[key] || !isEmailVerified) {
        return;
        // 비어있는 칸이 있으면 return
      }
    }
    if (inputs.password !== inputs.password2) return;
    setIsActive(true);
    // 모두 다 채워졌다면 isActive true
  };

  const handleSignUpButton = async () => {
    event?.preventDefault();
    const data = await signUp(inputs);
    if (data === "회원 가입 성공") {
      router.push("/");
    }
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
            <BorderInput
              label="Email"
              name="email"
              onChange={handleInput}
              placeholder="이메일을 입력하세요."
              disabled={isEmailChecking}
            />
            <S.GreenButton type="button" onClick={handleEmailCheckButton}>
              이메일 중복검사
            </S.GreenButton>
            <S.Checker isValidate={emailChecker === "사용가능한 이메일입니다."}>
              {emailChecker}
            </S.Checker>
            {isEmailChecking && (
              <S.ValidationWrapper>
                <BorderInput
                  placeholder="인증번호를 입력하세요."
                  onChange={(event) => setToken(event?.target.value)}
                />

                {!isEmailVerifying ? (
                  <S.ValidationButton
                    type="button"
                    onClick={handleSendVerificationButton}
                    disabled={isEmailVerified}
                  >
                    인증번호 전송
                  </S.ValidationButton>
                ) : (
                  <>
                    <S.ValidationButton
                      type="button"
                      onClick={handleCheckVerificationButton}
                    >
                      확인
                    </S.ValidationButton>
                    <S.ValidationButton
                      type="button"
                      onClick={handleSendVerificationButton}
                    >
                      재전송
                    </S.ValidationButton>
                  </>
                )}
              </S.ValidationWrapper>
            )}
          </S.InputWrapper>

          <S.InputWrapper>
            <BorderInput
              label="Nickname"
              name="nickname"
              onChange={handleInput}
              placeholder="닉네임을 입력하세요."
            />
            <S.GreenButton type="button" onClick={handleNicknameCheckButton}>
              닉네임 중복검사
            </S.GreenButton>
            <S.Checker
              isValidate={nicknameChecker === "사용가능한 닉네임입니다."}
            >
              {nicknameChecker}
            </S.Checker>
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput
              label="Password"
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="비밀번호를 입력하세요."
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput
              label="Password Confirm"
              type="password"
              name="password2"
              onChange={handleInput}
              placeholder="비밀번호를 한번 더 입력하세요."
            />
            <S.Checker
              isValidate={validatePassword === "비밀번호가 일치합니다."}
            >
              {validatePassword}
            </S.Checker>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.SignUpButton
              onClick={handleSignUpButton}
              isActive={isActive}
              disabled={!isActive}
            >
              SignUp
            </S.SignUpButton>
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
      {/* 로딩 */}
      {isLoading && <Loader />}
    </S.Wrapper>
  );
}
