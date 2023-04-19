import CummunityCommentListContainer from "../../communityComment/list/CommunityCommentList.container";
import * as S from "./CommunityDetail.style";

////// 나중에 지울부분 /////
const DETAIL_DATA = [
  {
    id: "1234567",

    title: "상담글의 제목입니다.",
    content:
      "상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다.",
    tags: ["#연애", "#고백", "#첫사랑"],
    createdAt: "2023.04.20",
    views: 1000,
    user: {
      nickname: "작성자닉네임입니다",
      profileImg: "https://ssl.pstatic.net/static/common/myarea/myInfo.gif",
    },
  },
];
//////////////////////

const CommunityDetailContainer = () => {
  return (
    <S.Wrap>
      {DETAIL_DATA.map((data) => (
        <S.BoardWrap key={data.id}>
          <S.Title>
            <span>Q.</span>
            {data.title}
          </S.Title>
          <S.Contents>{data.content}</S.Contents>
          <S.Tags>
            {data.tags.map((tag, idx) => (
              <S.Tag key={idx}>{tag}</S.Tag>
            ))}
          </S.Tags>
          <S.FooterWrap>
            <S.ProfileImg src={data.user.profileImg} />
            <S.Nickname>{data.user.nickname}</S.Nickname>
            <S.CreatedAt>• {data.createdAt}</S.CreatedAt>
            <S.View>• 조회수 {data.views}</S.View>
          </S.FooterWrap>
        </S.BoardWrap>
      ))}

      <S.Btn>목록으로</S.Btn>

      <CummunityCommentListContainer />
    </S.Wrap>
  );
};

export default CommunityDetailContainer;
