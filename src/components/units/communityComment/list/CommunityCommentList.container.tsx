import CommunityCommentWriteContainer from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentList.style";

////// 나중에 지울부분 /////
const COMMENT_DATA = [
  {
    id: "1234567",
    content:
      "답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다.",
    createdAt: "2023.04.20",
    likes: 10,
    picked: true,
    user: {
      nickname: "작성자닉네임입니다",
      grade: "작성자등급입니다",
      profileImg: "https://ssl.pstatic.net/static/common/myarea/myInfo.gif",
    },
  },
  {
    id: "1234567",
    content:
      "답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다.",
    createdAt: "2023.04.20",
    likes: 1000,
    picked: false,
    user: {
      nickname: "작성자닉네임입니다",
      grade: "작성자등급입니다",
      profileImg: "https://ssl.pstatic.net/static/common/myarea/myInfo.gif",
    },
  },
];
//////////////////////

const CummunityCommentListContainer = () => {
  // 질문자
  // 유저
  // 버튼모양 달라짐

  // const onClickPick = () => {};
  // const onClickLike = () => {};

  return (
    <>
      {COMMENT_DATA.map((data) => (
        <S.CommentWrap key={data.id} picked={!!data.picked}>
          <S.TopWrap>
            {data.picked && (
              <p>
                <S.Picked /> 질문자 • 지식인 채택
              </p>
            )}
            <S.BtnWrap>
              <S.Btn_line>수정</S.Btn_line>
              <S.Btn_line>삭제</S.Btn_line>
            </S.BtnWrap>
          </S.TopWrap>

          <S.InfoWrap>
            <S.ProfileWrap>
              <S.ProfileImg src={data.user.profileImg} />
              <div>
                <S.Nickname>닉네임: {data.user.nickname}</S.Nickname>
                <S.UserGrade>등급: {data.user.grade}</S.UserGrade>
              </div>
            </S.ProfileWrap>
            <S.LikeBtn>
              ❤<S.LikeCount>{data.likes}</S.LikeCount>
            </S.LikeBtn>
          </S.InfoWrap>

          <S.Contents>{data.content}</S.Contents>
          <S.CreatedAt>{data.createdAt}</S.CreatedAt>

          <S.BtnWrap>
            <S.Btn_line>
              {data.picked ? "답변 채택취소" : "답변 채택하기"}
            </S.Btn_line>
          </S.BtnWrap>
        </S.CommentWrap>
      ))}
      <CommunityCommentWriteContainer />
    </>
  );
};

export default CummunityCommentListContainer;
