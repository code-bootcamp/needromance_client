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
  /* position: relative; */
  /* height: 100vh; */
  width: 100%;
`;
const WrapperTop = styled.div`
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const BodyCommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
`;
const BodyComment = styled.p`
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
const BtnPosition = styled.div`
  display: flex;
  justify-content: center;
`;
const BodyImgBox = styled.div`
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
export default function MainSection2UI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Wrapper>
      <WrapperTop>
        <TopBox ref={ref} delay={0.5} inView={inView}>
          <div>
            52,975 <span>건</span>
          </div>
          <div>상담수</div>
        </TopBox>
        <TopBox ref={ref} delay={1} inView={inView}>
          <div>
            52,975 <span>건</span>
          </div>
          <div>답변 수</div>
        </TopBox>
        <TopBox ref={ref} delay={1.5} inView={inView}>
          <div>
            28,975 <span>명</span>
          </div>
          <div>회원 수</div>
        </TopBox>
      </WrapperTop>
      <WrapperBody>
        <BodyCommentsBox>
          <BodyComment>
            소중한 연인에 대해 이야기하고 싶지만 상담할 사람이 없어서
            힘드신가요?
          </BodyComment>
          <BodyComment>
            로맨스가 필요해는 당신의 고민을 개선하기 위해 도움을 드릴 수 있어요.
          </BodyComment>
          <BodyComment>
            속으로만 고민하던 당신만의 이야기를 들려주세요. 분명 좋은 결과가
            있을거에요!
          </BodyComment>
        </BodyCommentsBox>
        <BodyImgBox>
          <div>
            <Image
              src="/img/main/section2_img1.png"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/img/main/section2_img2.png"
              alt="img"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </BodyImgBox>
        <BodyCommentsBox>
          <BodyComment>
            최신 AI 기술인 Chat GPT를 활용하여 채팅형식으로 상담받을 수 있어요!
          </BodyComment>
          <BodyComment>
            당신의 고민을 누구에게도 알리고 싶지 않다면 Chat GPT에게 속삭여보는
            것은 어떨까요?
          </BodyComment>
        </BodyCommentsBox>
        <BtnPosition>
          <CustomBtn
            type={"Md"}
            fill={true}
            text={"채팅하러가기"}
            onClick={onClickMoveToPage("/chatgpt")}
          />
        </BtnPosition>
      </WrapperBody>
    </Wrapper>
  );
}
