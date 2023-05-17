import * as S from "./MainSection3.styles";
import { useInView } from "react-intersection-observer";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import Image from "next/image";

export default function MainSection3UI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.TopBox ref={ref} delay={0.5} inView={inView}>
          <div>Anonymity</div>
          <div>익명성</div>
        </S.TopBox>
        <S.TopBox ref={ref} delay={1} inView={inView}>
          <div>Consulting</div>
          <div>상담</div>
        </S.TopBox>
        <S.TopBox ref={ref} delay={1.5} inView={inView}>
          <div>Sympath</div>
          <div>공감</div>
        </S.TopBox>
      </S.WrapperTop>
      <S.WrapperBody>
        <S.BodyImgBox>
          <div>
            <Image
              src="/img/main/section3_img1.webp"
              alt="img"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src="/img/main/section3_img2.webp"
              alt="img"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </S.BodyImgBox>
        <S.BodyCommentsBox>
          <S.BodyComment>
            누군가와 같은 고민을 하고 있을지 몰라요.
          </S.BodyComment>
          <S.BodyComment>
            익명성이 보장된 대화공간에서 자신만의 고민을 이야기하는 것은
            어떨까요?
          </S.BodyComment>
        </S.BodyCommentsBox>
        <S.BtnPosition>
          <CustomBtn
            type="button"
            text="고민공유하기"
            onClick={onClickMoveToPage("/boards")}
            style={{
              backgroundColor: "var(--point-color-green)",
              color: "#fff",
            }}
          />
        </S.BtnPosition>
      </S.WrapperBody>
    </S.Wrapper>
  );
}
