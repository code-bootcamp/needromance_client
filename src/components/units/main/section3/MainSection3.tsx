import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { breakPoints } from "../../../../commons/styles/media";
import Image from "next/image";

interface IAnimationProps {
  inView: boolean;
  delay: number;
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;
const WrapperTop = styled.div`
  height: 250px;
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
`;
const BodyCommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0px 50px 0px;
`;
const BodyComment = styled.p`
  margin: 20px 0px;
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
const BodyImgBox = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const BtnPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
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
          <div>Anonymity</div>
          <div>익명성</div>
        </TopBox>
        <TopBox ref={ref} delay={1} inView={inView}>
          <div>Consulting</div>
          <div>상담</div>
        </TopBox>
        <TopBox ref={ref} delay={1.5} inView={inView}>
          <div>Sympath</div>
          <div>공감</div>
        </TopBox>
      </WrapperTop>
      <WrapperBody>
        <BodyImgBox>
          <Image
            src="/img/main/section3_img1.webp"
            alt="img"
            width={400}
            height={400}
          />
          <Image
            src="/img/main/section3_img2.webp"
            alt="img"
            width={400}
            height={400}
          />
          {/* <div>
            <Image
              src="/img/main/section3_img2.png"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
        </BodyImgBox>
        <BodyCommentsBox>
          <BodyComment>누군가와 같은 고민을 하고 있을지 몰라요.</BodyComment>
          <BodyComment>
            익명성이 보장된 대화공간에서 자신만의 고민을 이야기하는 것은
            어떨까요?
          </BodyComment>
        </BodyCommentsBox>
        <BtnPosition>
          <CustomBtn
            type={"Sm"}
            fill={true}
            text={"친구들과 소통하기"}
            onClick={onClickMoveToPage("/boards")}
          />
        </BtnPosition>
      </WrapperBody>
    </Wrapper>
  );
}
