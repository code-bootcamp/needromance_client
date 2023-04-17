import BorderInput from "../../commons/input/Input";
import * as S from "./SignIn.styles";

export default function SignIn() {
  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="img/logo/INR_logo.png" alt="로필 로고" />
          지금 당신의 연애고민은 무엇인가요?
        </S.Logo>
        <S.SignInForm>
          <S.InputWrapper>
            <BorderInput label="Email" style={{ marginBottom: "25px" }} />
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput label="Password" />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SignInButton>SignIn</S.SignInButton>
          </S.ButtonWrapper>
        </S.SignInForm>
        <S.BottomWrapper>
          <S.FindID><span>아이디</span>/ <span>비밀번호</span>를 잊으셨나요?</S.FindID>
          <S.Line />
          <div>구글 로그인 구역</div>
          <div>회원이 아니신가요? <button>회원가입</button></div>

        </S.BottomWrapper>
      </S.SignInWindow>
      로그인 페이지입니다.
    </S.Wrapper>
  );
}
