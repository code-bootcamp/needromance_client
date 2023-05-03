import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface ISignUpProps {
  isActive?: boolean;
  isValidate?: boolean;
}

export const Wrapper = styled.section`
  position: relative;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SignInWindow = styled.div`
  width: 450px;
  background-color: #ffffffb2;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
`;

export const SignInForm = styled.form`
  width: 320px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 320px; */
`;

export const ValidationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ButtonWrapper = styled.div`
  padding-top: 30px;
`;

export const ValidationButton = styled.button`
  width: 140px;
  height: 35px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : "var(--point-color-green)"};

  color: white;
  /* background-color: white; */
  font-size: var(--font-mobile-size-sm);
  border-radius: 50px;
  padding: 5px;
  /* cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; */
`;

export const GreenButton = styled.button`
  position: absolute;
  top: 30px;
  right: 10px;
  width: 90px;
  height: 30px;
  border: 1px solid var(--point-color-green);
  color: var(--point-color-green);
  background-color: white;
  font-size: var(--font-mobile-size-sm);
  border-radius: 50px;
  padding: 5px;
`;

export const SignUpButton = styled.button`
  width: 320px;
  height: 45px;
  /* background-color: var(--point-color-green); */
  color: white;
  font-size: 18px;
  border-radius: 8px;
  // 조건 만족시 컬러

  background-color: ${(props: ISignUpProps) =>
    props.isActive ? "var(--point-color-green)" : "#878787"};
`;

export const BottomWrapper = styled.div`
  width: 350px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 1px;
    color: gray;
  }
`;

export const FindID = styled.div`
  padding-top: 20px;
  font-size: var(--font-size-sm);

  a {
    color: var(--point-color-green);
  }
`;

export const Line = styled.div`
  width: 90%;
  border-bottom: 1px solid #cccccc;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Checker = styled.p`
  color: ${(props: ISignUpProps) => (props.isValidate ? "green" : "red")};
  font-size: 13px;
  padding: 3px;
`;

export const SignInLink = styled.div`
  padding: 20px;

  a {
    color: var(--point-color-green);
  }
`;
