import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { breakPoints } from "../../../../commons/styles/media";

interface IAnimationProps {
  inView: boolean;
  delay: number;
}

const Wrapper = styled.div`
  margin-top: 200px;
  background-color: #fff;
  height: 900px;
`;
const WrapperTop = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const TopBox = styled.div<IAnimationProps>`
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
    font-size: var(--font-size-lg);
    color: var(--point-color-green);
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
    }
    @media ${breakPoints.tablet} {
      font-size: var(--font-size-md);
    }
  }
  div:nth-of-type(2) {
    font-size: var(--font-size-lg);
    color: var(--point-color-brown);
    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-md);
    }
    @media ${breakPoints.tablet} {
      font-size: var(--font-size-md);
    }
  }
`;
const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  position: relative;
  @media ${breakPoints.mobile} {
  }
`;
const BodyCommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(600px - 100px);
  background-color: red;
  > p {
    font-size: var(--font-size-lg);
  }
  @media ${breakPoints.mobile} {
    > p {
      font-size: var(--font-mobile-size-md);
    }
  }
  @media ${breakPoints.tablet} {
    > p {
      font-size: var(--font-size-md);
    }
  }
`;
const BodyImgBox = styled.div`
  position: absolute;
  top: -100px;
  left: 200px;
  width: 600px;
  > img {
    width: 100%;
    height: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 400px;
    top: 0px;
    left: 0px;
  }
  @media ${breakPoints.tablet} {
    width: 500px;
    top: 0px;
    left: 0px;
  }
`;
const BtnPosition = styled.div``;
export default function MainSection3UI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Wrapper>
      <WrapperTop>
        <TopBox ref={ref} delay={0.5} inView={inView}>
          <div>Change</div>
          <div>변화</div>
        </TopBox>
        <TopBox ref={ref} delay={1} inView={inView}>
          <div>Authenticit</div>
          <div>진정성</div>
        </TopBox>
        <TopBox ref={ref} delay={1.5} inView={inView}>
          <div>Sympath</div>
          <div>공감</div>
        </TopBox>
      </WrapperTop>
      <WrapperBody>
        <BodyImgBox>
          <img src="/img/main/section3_img1.png" alt="img" />
        </BodyImgBox>
        <BodyCommentsBox>
          <p>친구들에게 말하지 못했던 이야기들..</p>
          <p>우리와 함께 나눠 보는건 어떨까요?</p>
        </BodyCommentsBox>
        <BtnPosition>
          <CustomBtn
            type={"Sm"}
            fill={false}
            text={"친구들과 소통하기"}
            onClick={onClickMoveToPage("/community")}
          />
        </BtnPosition>
      </WrapperBody>
    </Wrapper>
  );
}
