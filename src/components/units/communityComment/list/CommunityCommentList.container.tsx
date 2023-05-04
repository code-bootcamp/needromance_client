import { getDate } from "../../../../commons/libraries/getDate";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import CommunityCommentWriteContainer from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentList.style";
import {
  DeleteAnswer,
  UpdateAnswer,
  GetAnswers,
  LikeAnswer,
  PickAnswer,
  PostAnswer,
} from "../../../../commons/api/answers";
import { useEffect, useState } from "react";
import Popup from "../../../commons/modals/PopupModal";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../commons/store/atoms";

const CummunityCommentListContainer = ({ boardId, writer }: any) => {
  // data
  const [data, setData] = useState(null);
  // 컴포넌트 변경
  const [isEdit, setIsEdit] = useState<string>("");
  // popup modal
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  // token
  const accessToken = useRecoilValue(accessTokenState);

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴
  useEffect(() => {
    fetch();
  }, [boardId]);

  const fetch = async () => {
    const result1 = await GetAnswers(accessToken, Number(boardId), 1);
    const result2 = await GetAnswers(accessToken, Number(boardId), 0);
    const result = [].concat(result1, result2);
    setData(result);
  };

  // 댓글 수정 후. refetch
  const handleUpdateAnswer = async (contents: string) => {
    try {
      await UpdateAnswer(accessToken, Number(isEdit), contents);
      await fetch();
      setConfirm(true);
      setTimeout(() => {
        setConfirm(false);
        setIsEdit("");
      }, 1200);
    } catch (error) {
      setWarning(true);
    }
  };

  // 댓글 삭제후, refetch
  const handleDeleteAnswer = async (id: string) => {
    try {
      await DeleteAnswer(accessToken, Number(id));
      await fetch();
      setConfirm(true);
      setTimeout(() => {
        setConfirm(false);
        setIsEdit("");
      }, 1200);
    } catch (error) {
      setWarning(true);
    }
  };

  // 댓글 작성 후, refetch
  const handlePostAnswer = async (contents: string) => {
    await PostAnswer(accessToken, Number(boardId), contents);
    await fetch();
  };

  // 댓글 좋아요,refetch
  const toggleLike = async (id: string) => {
    await LikeAnswer(accessToken, Number(id));
    await fetch();
  };

  // 댓글 픽 후,refetch
  const togglePick = async (id: string, status: boolean) => {
    await PickAnswer(accessToken, Number(id), Number(boardId), !status);
    await fetch();
  };

  return (
    <>
      {data?.map((list) => (
        <S.CommentWrap key={list?.id}>
          {isEdit === list?.id ? (
            <CommunityCommentWriteContainer
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              defaultContents={list.contents}
              handleUpdateAnswer={handleUpdateAnswer}
            />
          ) : (
            <>
              {list?.status && (
                <S.PickedBox>
                  <S.PickedLabel>
                    <S.Picked /> 질문자 • 지식인 채택
                  </S.PickedLabel>
                </S.PickedBox>
              )}

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
                    onClick={() => handleDeleteAnswer(list.id)}
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
                      {list?.likedByUsers?.length}
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
            </>
          )}
        </S.CommentWrap>
      ))}
      <CommunityCommentWriteContainer handlePostAnswer={handlePostAnswer} />

      <Popup
        text={isEdit ? "수정이 완료되었습니다." : "삭제가 완료되었습니다."}
        confirm={confirm}
        setConfirm={setConfirm}
        warning={warning}
        setWarning={setWarning}
      />
    </>
  );
};

export default CummunityCommentListContainer;
