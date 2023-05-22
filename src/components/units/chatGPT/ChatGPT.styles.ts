import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Position = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding-bottom: 100px;
  background-color: #fff;
  overflow-y: scroll;
  @media ${breakPoints.mobile} {
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 375px;
  margin-top: 20px;
  border-radius: var(--btn-radius-sm);
  @media ${breakPoints.mobile} {
    margin-top: 10px;
  }
  @media ${breakPoints.tablet} {
    margin-top: 20px;
  }
`;
export const LodingWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 43px);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  border-radius: var(--btn-radius-sm);
`;
export const LoadingNotice = styled.div`
  @keyframes loadingAnimation {
    0% {
      content: "잠시만 기다려 주세요.";
    }
    33% {
      content: "잠시만 기다려 주세요. .";
    }
    66% {
      content: "잠시만 기다려 주세요. . .";
    }
    100% {
      content: "잠시만 기다려 주세요.";
    }
  }
  text-align: center;
  width: 200px;
  padding: 20px 10px;
  background-color: #fff;
  border-radius: var(--btn-radius-sm);
  ::before {
    content: "AI가 답변을 생각하고 있어요. ";
  }
  ::after {
    content: "";
    animation: loadingAnimation 2s infinite;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--sub-bg-color);
  border-radius: var(--btn-radius-sm) var(--btn-radius-sm) 0 0;
`;
export const Title = styled.div`
  font-size: var(--font-size-md);
  text-align: center;
  padding: 10px 0;
  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-md);
  }
`;
export const Notice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--point-color-green);
  color: #fff;
  padding: 10px 10px;
  @media ${breakPoints.mobile} {
    padding: 5px 5px;
  }
  div:nth-of-type(1) {
    margin-left: 10px;
    font-size: var(--font-size-sm);
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-md);
    }
  }
`;
export const ChatBody = styled.div`
  display: flex;
  position: relative;
  height: 450px;
`;
export const ChatWrapper = styled.div`
  /* 데이터 들어오고 아래로 최신대화가 안내려오면 height 속성을 바꿔보기. */
  width: 375px;
  height: 450px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--main-bg-color);
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;
export const WrapperMessageUser = styled.div`
  display: flex;
  justify-content: flex-end;
  height: auto;
  padding: 15px;
  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;
export const MessageUser = styled.div`
  padding: 5px;
  min-height: 20px;
  max-width: 200px;
  background-color: #fff;
  border-radius: var(--btn-radius-sm);
  overflow-wrap: break-word;
  word-break: break-word;
  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }
`;
export const WrapperMessageGPT = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  padding: 15px;
  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;
export const MessageGPT = styled.div`
  padding: 5px;
  min-height: 20px;
  max-width: 200px;
  color: #fff;
  background-color: var(--point-color-green);
  border-radius: var(--btn-radius-sm);
  overflow-wrap: break-word;
  word-break: break-word;
  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }
`;

export const WrapperInput = styled.div`
  // 반응형 맞추기
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  padding: 10px 10px;
  background-color: var(--sub-bg-color);
  border-radius: 0 0 var(--btn-radius-sm) var(--btn-radius-sm);
  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }
`;
export const TextInput = styled.input`
  width: 85%;
  border-radius: var(--btn-radius-lg);
  background-color: #fff;
  padding: 10px 15px;
  @media ${breakPoints.mobile} {
    padding: 5px 10px;
    width: 90%;
  }
`;
export const SendBtn = styled.button`
  padding: 10px 15px;
  background-color: var(--point-color-green);
  color: #fff;
  border-radius: var(--btn-radius-sm);
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 5px 10px;
  }
`;
