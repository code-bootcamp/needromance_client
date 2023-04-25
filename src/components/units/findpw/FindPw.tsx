import Link from "next/link";
import { useState } from "react";
import {
  checkVerificationEmail,
  sendVerificationEmail,
} from "../../../commons/api/test";
import CustomBtn from "../../commons/buttons/CustomBtn";
import BorderInput from "../../commons/input/Input";
import * as S from "./FindPw.styles";

export default function FindPw() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailVerifying, setIsEmailVerifying] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [token, setToken] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSendVerificationButton = async () => {
    // 인증번호 전송을 누르면,
    setIsLoading(true);
    const data = await sendVerificationEmail(inputs.email);
    // 상태코드로 확인이 가능하다...
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

  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
        </S.Logo>
        <S.Menu> 비밀번호 찾기</S.Menu>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput check={true} label="Email" style={{}} />
          </S.InputWrapper>
          {/* <S.InputWrapper style={{ width: "140px" }}>
              <BorderInput style={{}} />
            </S.InputWrapper>
            <CustomBtn type="Sm" fill={false} text="인증번호 발송" /> */}
          {/* <CustomBtn type="Sm" fill={true} text="인증번호 발송" /> */}

          <S.ValidationWrapper>
            <BorderInput
              placeholder="인증번호를 입력하세요."
              onChange={(event) => setToken(event?.target.value)}
              style={{ width: "180px" }}
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

          <S.ButtonWrapper>
            <S.ResetButton>비밀번호 재설정</S.ResetButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <Link href="/signin">
            <a>로그인하러 가기</a>
          </Link>
        </S.BottomWrapper>
      </S.SignInWindow>
    </S.Wrapper>
  );
}
