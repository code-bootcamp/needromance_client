import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 30px;
  background-color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
`;
export const TitleInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  position: relative;
`;

export const InfoTitle = styled.div`
  margin-bottom: 30px;
  font-size: var(--font-size-md);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AlertTitle = styled.span`
  position: absolute;
  color: red;
  font-size: var(--font-size-sm);
  top: 35px;
`;
export const AlertContent = styled.span`
  position: absolute;
  top: 35px;
  color: red;
`;
export const ContentBox = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--point-color-green);
  color: #fff;
  font-size: var(--font-size-md);
  border-radius: var(--btn-radius);
  padding: var(--btn-padding);
  min-width: var(--btn-width-lg);
  height: var(--btn-height);
`;
