import { getDate } from "../../../../commons/libraries/getDate";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import CommunityCommentWriteContainer from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentList.style";
import {
  DeleteComment,
  EditComment,
  GetComments,
  LikeComment,
  PickComment,
  PostComment,
} from "../../../../commons/api/comment";
import { useEffect, useState } from "react";

const CummunityCommentListContainer = ({ boardId, writer }: any) => {
  console.log(boardId, writer);

  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState<string>("");
  const [likes, setLikes] = useState(0);

  const fetch = async () => {
    const result = await GetComments(Number(boardId), 0);
    setData(result);
    setIsEdit("");
  };

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴
  useEffect(() => {
    fetch();
  }, [boardId]);

  // 댓글 수정 후. refetch
  const handleEditComment = async (contents: string) => {
    await EditComment(Number(isEdit), contents);
    await fetch();
  };

  // 댓글 삭제후, refetch
  const handleDeleteComment = async (id: string) => {
    await DeleteComment(Number(id));
    await fetch();
  };

  // 댓글 작성 후, refetch
  const handlePostComment = async (contents: string) => {
    await PostComment(Number(boardId), contents);
    await fetch();
  };

  // 댓글 좋아요
  const handleLike = async (id: string) => {
    const result = await LikeComment(Number(id));
    console.log(result);
  };

  // 댓글 픽
  const handlePick = async (id: string) => {
    const result = await PickComment(Number(id), Number(boardId));
    console.log(result);
    fetch();
  };

  return (
    <>
      {data?.map((list) => (
        <S.CommentWrap key={list.id}>
          {list.status && (
            <S.PickedLabel>
              <S.Picked /> 질문자 • 지식인 채택
            </S.PickedLabel>
          )}
          {isEdit === list.id ? (
            <CommunityCommentWriteContainer
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              defaultContents={list.contents}
              handleEditComment={handleEditComment}
            />
          ) : (
            <S.CardWrap>
              <S.BtnWrap>
                <CustomBtn
                  type="Sm"
                  fill={false}
                  text="수정"
                  onClick={() => setIsEdit(list.id)}
                />
                <CustomBtn
                  type="Sm"
                  fill={true}
                  text="삭제"
                  onClick={() => handleDeleteComment(list.id)}
                />
              </S.BtnWrap>
              <S.NameTo>
                <span>To.</span>
                {writer}
              </S.NameTo>

              <S.InnerWrap>
                <S.LeftWrap>
                  <S.Contents>{list.contents}</S.Contents>
                </S.LeftWrap>
                <S.RigthWrap>
                  <S.StampWrap>
                    {list?.user?.userImg ? (
                      <S.ProfileImg src={list?.user?.userImg} />
                    ) : (
                      <S.ProfileImg src="/img/community/default_userImg.png" />
                    )}
                    <S.SealImg src="/img/community/seal.png" />
                  </S.StampWrap>
                  <S.Nickname> {list.user.nickname}</S.Nickname>
                  <S.UserGrade>{list.user.point}</S.UserGrade>
                </S.RigthWrap>
              </S.InnerWrap>

              <S.FooterWrap>
                <div>
                  <S.CreatedAt>{getDate(list.createdAt)}</S.CreatedAt>
                  <S.LikeCount>
                    <span>💛</span>
                    좋아요 {likes}
                  </S.LikeCount>
                </div>
                <S.BtnWrap>
                  <CustomBtn
                    type="Sm"
                    fill={false}
                    text="좋아요"
                    onClick={() => handleLike(list.id)}
                  />
                  <CustomBtn
                    type="Sm"
                    fill={false}
                    text="채택하기"
                    onClick={() => handlePick(list.id)}
                  />
                </S.BtnWrap>
              </S.FooterWrap>
            </S.CardWrap>
          )}
        </S.CommentWrap>
      ))}
      <CommunityCommentWriteContainer handlePostComment={handlePostComment} />
    </>
  );
};

export default CummunityCommentListContainer;
