import styled from "@emotion/styled";
import { IoCheckmarkSharp } from "react-icons/io5";

export const Wrapper = styled.section`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Menu = styled.div`
  font-size: var(--font-size-md);
`;

export const SignInForm = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 280px;
  gap: 100px;
`;

export const Checker = styled(IoCheckmarkSharp)`
  position: absolute;
  top: 0;
`;

export const ButtonWrapper = styled.div`
  padding-top: 20px;
`;

export const SignInButton = styled.button`
  width: 280px;
  height: 45px;
  background-color: var(--point-color-green);
  color: white;
  font-size: 1rem;
  border-radius: 8px;
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

  a {
    padding-top: 10px;
    color: #999999;
    font-size: var(--font-size-sm);
  }
`;

export const FindID = styled.div`
  padding-top: 10px;
  font-size: var(--font-size-sm);

  span {
    color: var(--point-color-green);
  }
`;

export const SignUpLink = styled.div`
  padding: 20px;

  a {
    color: var(--point-color-green);
  }
`;
