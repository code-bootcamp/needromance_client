import CustomBtn from "../../../commons/buttons/CustomBtn";
import Tag from "../../../commons/hashtag/HashTag";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import CummunityCommentListContainer from "../../communityComment/list/CommunityCommentList.container";
import * as S from "./CommunityDetail.style";

////// 나중에 지울부분 /////
const DETAIL_DATA = [
  {
    id: "1234567",

    title: "상담글의 제목입니다.",
    content:
      "상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다.",
    tags: ["연애", "고백", "첫사랑"],
    createdAt: "2023년 4월 20일",
    views: 1000,
    user: {
      nickname: "작성자닉네임",
      profileImg: "/img/community/default_profile.jpg",
    },
  },
];
//////////////////////

const CommunityDetailContainer = () => {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrap>
      {DETAIL_DATA.map((data) => (
        <S.CardWrap key={data.id}>
          <S.BtnWrap>
            <CustomBtn type="Sm" fill={false} text="수정" />
            <CustomBtn type="Sm" fill={false} text="삭제" />
          </S.BtnWrap>

          <S.Title>
            <span>Q.</span>
            {data.title}
          </S.Title>
          <S.InnerWrap>
            <S.LeftWrap>
              <S.Contents>{data.content}</S.Contents>
            </S.LeftWrap>
            <S.RigthWrap>
              <S.StampWrap>
                <S.ProfileImg src={data.user.profileImg} />
                <S.SealImg src="/img/community/seal.png" />
              </S.StampWrap>
              <S.Nickname>{data.user.nickname}</S.Nickname>
            </S.RigthWrap>
          </S.InnerWrap>
          <S.FooterWrap>
            <Tag tags={data.tags} />
            <S.CreatedAt>{data.createdAt}</S.CreatedAt>
            <S.View>
              <span>💌</span> 조회수 {data.views}
            </S.View>
          </S.FooterWrap>
        </S.CardWrap>
      ))}

      <CustomBtn
        type="Md"
        fill={true}
        text="목록으로"
        onClick={onClickMoveToPage("/community")}
      />

      <CummunityCommentListContainer />
    </S.Wrap>
  );
};

export default CommunityDetailContainer;
