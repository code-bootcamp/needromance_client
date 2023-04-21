import Link from "next/link";
import CustomBtn from "../../commons/buttons/CustomBtn";
import BorderInput from "../../commons/input/Input";
import * as S from "./FindPw.styles";

export default function FindPw() {
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
          <S.BtnInputWrapper>
            <S.InputWrapper style={{ width: "140px" }}>
              <BorderInput style={{}} />
            </S.InputWrapper>
            <CustomBtn type="Sm" fill={false} text="인증번호 발송" />
            {/* <CustomBtn type="Sm" fill={true} text="인증번호 발송" /> */}
          </S.BtnInputWrapper>

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
