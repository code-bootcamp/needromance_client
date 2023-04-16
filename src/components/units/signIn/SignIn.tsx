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
          <label>Email</label>
          <input />
          <label>Password</label>
          <input />
          <S.InputWrapper>
            <BorderInput label="Email" />
          </S.InputWrapper>
          <S.InputWrapper>
            <BorderInput label="Password" />
          </S.InputWrapper>
          <button>SignIn</button>
        </S.SignInForm>
        <div>아이디 / 비밀번호를 잊으셨나요?</div>
        <line></line>
        <div>구글 로그인 구역</div>
        <div>회원이 아니신가요? 회원가입</div>
      </S.SignInWindow>
      로그인 페이지입니다.
    </S.Wrapper>
  );
}
