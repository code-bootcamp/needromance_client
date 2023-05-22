import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";

import * as S from "./MainSection2.styles";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { userProfileState } from "../../../../commons/store/atoms";
import { getSiteInfo } from "../../../../commons/api/main";
import { SiteInfo } from "../Main.types";

export default function MainSection2UI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [siteInfo, setSiteInfo] = useState<SiteInfo>();

  useEffect(() => {
    async function fetchSiteInfo() {
      try {
        const response = await getSiteInfo();
        setSiteInfo(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSiteInfo();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.TopBox ref={ref} delay={0.5} inView={inView}>
          <div>
            {siteInfo?.countBoards} <span>건</span>
          </div>
          <div>상담수</div>
        </S.TopBox>
        <S.TopBox ref={ref} delay={1} inView={inView}>
          <div>
            {siteInfo?.countAnswers} <span>건</span>
          </div>
          <div>답변 수</div>
        </S.TopBox>
        <S.TopBox ref={ref} delay={1.5} inView={inView}>
          <div>
            {siteInfo?.countUsers} <span>명</span>
          </div>
          <div>회원 수</div>
        </S.TopBox>
      </S.WrapperTop>
      <S.WrapperBody>
        <S.BodyCommentsBox>
          <S.BodyComment>
            소중한 연인에 대해 이야기하고 싶지만 상담할 사람이 없어서
            힘드신가요?
          </S.BodyComment>
          <S.BodyComment>
            로맨스가 필요해는 당신의 고민을 개선하기 위해 도움을 드릴 수 있어요.
          </S.BodyComment>
          <S.BodyComment>
            속으로만 고민하던 당신만의 이야기를 들려주세요. 분명 좋은 결과가
            있을거에요!
          </S.BodyComment>
        </S.BodyCommentsBox>
        <S.BodyImgBox>
          <div>
            <Image
              src="/img/main/section2_img1.webp"
              alt="img"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div>
            <Image
              src="/img/main/section2_img2.webp"
              alt="img"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </S.BodyImgBox>
        <S.BodyCommentsBox>
          <S.BodyComment>
            최신 AI 기술인 Chat GPT를 활용하여 채팅형식으로 상담받을 수 있어요!
          </S.BodyComment>
          <S.BodyComment>
            당신의 고민을 누구에게도 알리고 싶지 않다면 Chat GPT에게 속삭여보는
            것은 어떨까요?
          </S.BodyComment>
        </S.BodyCommentsBox>
        <S.BtnPosition>
          <CustomBtn
            type="button"
            text="상담하러가기"
            onClick={onClickMoveToPage(`/chatgpt/${userProfile?.id}`)}
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
