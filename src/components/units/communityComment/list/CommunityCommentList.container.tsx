import { Icon_Heart } from "../../../../commons/styles/icons";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import CommunityCommentWriteContainer from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentList.style";

////// 나중에 지울부분 /////
const COMMENT_DATA = [
  {
    id: "1234567",
    content:
      "답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다.",
    createdAt: "2023년 4월 20일",
    likes: 10,
    picked: true,
    user: {
      nickname: "작성자닉네임",
      grade: "작성자등급",
      profileImg: "https://ssl.pstatic.net/static/common/myarea/myInfo.gif",
    },
  },
  {
    id: "1234567",
    content:
      "답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 답변 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다. 상담글의 내용입니다.",
    createdAt: "2023년 4월 20일",
    likes: 1000,
    picked: false,
    user: {
      nickname: "작성자닉네임",
      grade: "작성자등급",
      profileImg: "https://ssl.pstatic.net/static/common/myarea/myInfo.gif",
    },
  },
];
//////////////////////

const CummunityCommentListContainer = () => {
  // const onClickPick = () => {};
  // const onClickLike = () => {};

  return (
    <>
      {COMMENT_DATA.map((data) => (
        <S.CommentWrap key={data.id} picked={!!data.picked}>
          {data.picked && (
            <S.PickedLabel>
              <S.Picked /> 질문자 • 지식인 채택
            </S.PickedLabel>
          )}
          <S.CardWrap>
            <S.BtnWrap>
              <CustomBtn type="Sm" fill={false} text="수정" />
              <CustomBtn type="Sm" fill={true} text="삭제" />
            </S.BtnWrap>

            <S.InnerWrap>
              <S.LeftWrap>
                <S.NameTo>
                  <span>To.</span>작성자이름
                </S.NameTo>
                <S.Contents>{data.content}</S.Contents>
              </S.LeftWrap>
              <S.RigthWrap>
                <S.StampWrap>
                  <S.ProfileImg src={data.user.profileImg} />
                  <S.SealImg src="/img/community/seal.png" />
                </S.StampWrap>
                <S.Nickname> {data.user.nickname}</S.Nickname>
                <S.UserGrade>{data.user.grade}</S.UserGrade>
              </S.RigthWrap>
            </S.InnerWrap>
            <S.FooterWrap>
              <div>
                <S.CreatedAt>{data.createdAt}</S.CreatedAt>
                <S.LikeCount>
                  <span>💛</span> 좋아요 {data.likes}
                </S.LikeCount>
              </div>
              <S.BtnWrap>
                <CustomBtn type="Sm" fill={false} text="좋아요" />
                <CustomBtn type="Sm" fill={false} text="채택하기" />
              </S.BtnWrap>
            </S.FooterWrap>
          </S.CardWrap>
        </S.CommentWrap>
      ))}
      <CommunityCommentWriteContainer />
    </>
  );
};

export default CummunityCommentListContainer;
