import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;

  height: 100%;
  padding: 3% 2%;
  background-color: white;
`;

export const Title = styled.h1``;
export const TitleInputWrapper = styled.div`
  /* width: 100%; */
  max-width: 929px;
  min-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 910px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const InfoTitle = styled.div`
  width: 50px;
  font-size: 1.3rem;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 910px;

  margin: 2em 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
