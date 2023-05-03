import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  checkDuplicateEmail,
  checkVerificationEmail,
  resetPassword,
  sendVerificationEmail,
} from "../../../commons/api/signup";
import BorderInput from "../../commons/input/Input";
import Loader from "../../commons/loader/Loader";
import CustomModal from "../../commons/modals/CustomModal";
import * as S from "./FindPw.styles";

export default function FindPw() {
  const router = useRouter();
  // modal
  const [isRetryOpenModal, setIsRetryOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailChecker, setEmailChecker] = useState("");
  const [tokenChecker, setTokenChecker] = useState("");
  const [isEmailVerifying, setIsEmailVerifying] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isEmailChecking, setIsEmailChecking] = useState(false);
  const [token, setToken] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, []);

  const onSubmitFindPw = async () => {
    event?.preventDefault();
    if (!tokenChecker) return;

    const response = await resetPassword(inputs.email, inputs.password);

    if (response?.data === "비밀번호 재설정 성공") {
      router.push("/findpw/success");
    }
  };

  // 이메일 중복 검사
  const onChangeCheckEmail = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setEmailChecker("");
      return;
    }
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    const data = await checkDuplicateEmail(event.target.value);

    if (data === true) {
      setIsEmailChecking(false);
      setEmailChecker("입력하신 이메일로 조회되는 아이디가 없습니다.");
    } else {
      setIsEmailChecking(true);
      setEmailChecker("이메일 인증을 진행해주세요.");
    }
  };

  const handleSendVerificationButton = async () => {
    // 인증번호 전송을 누르면,
    setIsLoading(true);
    const data = await sendVerificationEmail(inputs.email);
    // 상태코드로 확인이 가능하다...
    setIsLoading(false);

    if (data === 200) {
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
      setTokenChecker(true); // tokenChecker true
    }
  };

  return (
    <S.Wrapper>
      <S.SignInWindow>
        <S.Logo>
          <S.LogoImage src="/img/logo/INR_logo.png" alt="로필 로고" />
        </S.Logo>
        <S.Menu> 비밀번호 재설정</S.Menu>
        <S.SignInForm onSubmit={onSubmitFindPw}>
          <S.InputWrapper>
            <BorderInput
              check={true}
              label="Email"
              name="email"
              placeholder="이메일을 입력하세요."
              onChange={onChangeCheckEmail}
            />
            <S.Checker
              isExistId={emailChecker === "이메일 인증을 진행해주세요."}
            >
              {emailChecker}
            </S.Checker>
          </S.InputWrapper>
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
                  {tokenChecker ? "인증 완료" : "인증번호 전송"}
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
          {isEmailVerified && (
            <S.InputWrapper>
              <BorderInput
                check={true}
                label="Password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={(event) =>
                  setInputs({ ...inputs, password: event.target.value })
                }
              />
            </S.InputWrapper>
          )}
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
      {isLoading && <Loader />}
      {isRetryOpenModal && (
        <CustomModal
          type="alert"
          setOpenModal={setIsRetryOpenModal}
          openModal={isRetryOpenModal}
          handleTestFn={() => setIsRetryOpenModal(false)}
        >
          다시 시도해주세요.
        </CustomModal>
      )}
      <CustomModal
        type="alert"
        setOpenModal={setIsRetryOpenModal}
        openModal={isRetryOpenModal}
        handleTestFn={() => setIsRetryOpenModal(false)}
      >
        다시 시도해주세요.
      </CustomModal>
    </S.Wrapper>
  );
}
