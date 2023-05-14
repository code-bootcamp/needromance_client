import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { breakPoints } from "../../../../commons/styles/media";
import { AnimationStyle } from "../Main.types";

export const Wrapper = styled.div`
  width: 100%;
`;
export const WrapperTop = styled.div`
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

// Animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const TopBox = styled.div<AnimationStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation-name: ${({ inView }) => inView && fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay || 0}s;

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    font-size: var(--font-size-lg);
    span {
      margin-left: 10px;
      font-size: var(--font-size-md);
    }
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
      span {
        font-size: var(--font-mobile-size-md);
      }
    }
    @media ${breakPoints.tablet} {
      font-size: var(--font-size-md);
      span {
        font-size: var(--font-size-md);
      }
    }
  }

  div:nth-of-type(2) {
    font-size: var(--font-size-lg);
    color: var(--point-color-green);
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
    }
    @media ${breakPoints.tablet} {
      font-size: var(--font-size-md);
    }
  }
`;
export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
export const BodyCommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
`;
export const BodyComment = styled.p`
  margin: 20px 0;
  font-size: var(--font-size-lg);
  text-align: center;
  @media ${breakPoints.mobile} {
    padding: 0px 20px;
    font-size: var(--font-mobile-size-lg);
    margin: 20px 0;
  }
  @media ${breakPoints.tablet} {
    padding: 0px 20px;
    font-size: var(--font-size-md);
    margin: 30px 0px;
  }
`;
export const BtnPosition = styled.div`
  display: flex;
  justify-content: center;
`;
export const BodyImgBox = styled.div`
  height: 600px;
  position: relative;
  > div:nth-of-type(1) {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0px;
  }
  > div:nth-of-type(2) {
    width: 50%;
    height: 50%;
    position: absolute;
    bottom: 100px;
    left: 0px;
  }
`;
