import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";

interface IAnimationProps {
  inView: boolean;
  delay: number;
}

const Wrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
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
    font-weight: 700;
  }
  div:nth-of-type(2) {
    font-size: var(--font-size-md);
    color: var(--point-color-brown);
  }
`;
const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 600px;
  padding-bottom: 50px;
  position: relative;
`;
const BodyCommentsBox = styled.div`
  position: absolute;
  top: 100px;
  right: 200px;
  font-size: var(--font-size-md);
`;
const BodyImgBox = styled.div`
  top: -100px;
  left: 200px;
  position: absolute;
  width: 600px;
  > img {
    width: 100%;
    height: 100%;
  }
`;
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
        <CustomBtn
          type={"Sm"}
          fill={false}
          text={"친구들과 소통하기"}
          onClickMoveToPage={onClickMoveToPage("/community")}
        />
      </WrapperBody>
    </Wrapper>
  );
}
