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

  const fetch = async () => {
    const result1 = await GetComments(Number(boardId), 1);
    const result2 = await GetComments(Number(boardId), 0);
    const result = [].concat(result1, result2);
    console.log(result);
    setData(result);
    setIsEdit("");
  };

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴 + 페이지 변경시
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

  // 댓글 좋아요 후, refetch
  const toggleLike = async (id: string) => {
    const result = await LikeComment(Number(id));
    console.log(result);
    await fetch();
  };

  // 댓글 픽 후,refetch
  const togglePick = async (id: string, status: boolean) => {
    await PickComment(Number(id), Number(boardId), !status);
    await fetch();
  };

  return (
    <>
      {data?.map((list) => (
        <S.CommentWrap key={list?.id}>
          {list?.status && (
            <S.PickedBox>
              <S.PickedLabel>
                <S.Picked /> 질문자 • 지식인 채택
              </S.PickedLabel>
            </S.PickedBox>
          )}
          {isEdit === list?.id ? (
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
                  <S.Contents>{list?.contents}</S.Contents>
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
                  <S.Nickname> {list?.user?.nickname}</S.Nickname>
                  <S.UserGrade>{list?.user?.point}</S.UserGrade>
                </S.RigthWrap>
              </S.InnerWrap>

              <S.FooterWrap>
                <div>
                  <S.CreatedAt>{getDate(list?.createdAt)}</S.CreatedAt>
                  <S.LikeCount>
                    <span>💛 좋아요</span>
                    {list?.likedByUsers.length}
                  </S.LikeCount>
                </div>
                <S.BtnWrap>
                  <CustomBtn
                    type="Sm"
                    fill={false}
                    text="좋아요"
                    onClick={() => toggleLike(list.id)}
                  />
                  <CustomBtn
                    type="Sm"
                    fill={false}
                    text={list?.status ? "채택취소" : "채택하기"}
                    onClick={() => togglePick(list.id, list.status)}
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
