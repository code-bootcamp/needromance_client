import { useRouter } from "next/router";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import Tag from "../../../commons/hashtag/HashTag";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import CummunityCommentListContainer from "../../communityComment/list/CommunityCommentList.container";
import * as S from "./CommunityDetail.style";
import { getDate } from "../../../../commons/libraries/getDate";
import { DeleteBoard, GetBoard } from "../../../../commons/api/boards";
import { useEffect, useState } from "react";

const CommunityDetailContainer = () => {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [data, setData] = useState(null);

  const fetch = async () => {
    const result = await GetBoard(Number(router.query.communityId));
    setData(result);
  };

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴
  useEffect(() => {
    fetch();
  }, [router.query.communityId]);

  const handleDeleteBoard = async () => {
    await DeleteBoard(Number(router.query.communityId));
    await router.push("/boards");
  };

  return (
    <S.Wrap>
      <S.CardWrap>
        <S.BtnWrap>
          <CustomBtn
            type="Sm"
            fill={false}
            text="수정"
            onClick={onClickMoveToPage(
              `/boards/${router.query.communityId}/edit`
            )}
          />
          <CustomBtn
            type="Sm"
            fill={false}
            text="삭제"
            onClick={() => handleDeleteBoard()}
          />
        </S.BtnWrap>

        <S.Title>
          <span>Q.</span>
          {data?.title}
        </S.Title>
        <S.InnerWrap>
          <S.LeftWrap>
            <S.Contents>{data?.contents}</S.Contents>
          </S.LeftWrap>
          <S.RigthWrap>
            <S.StampWrap>
              {data?.user?.profileImg ? (
                <S.ProfileImg src={data?.user?.profileImg} />
              ) : (
                <S.ProfileImg src="/img/community/default_userImg.png" />
              )}
              <S.SealImg src="/img/community/seal.png" />
            </S.StampWrap>
            <S.Nickname>{data?.user?.nickname}</S.Nickname>
          </S.RigthWrap>
        </S.InnerWrap>
        <S.FooterWrap>
          <Tag tags={data?.tags} />
          <S.CreatedAt>{getDate(data?.createdAt)}</S.CreatedAt>
          <S.View>
            <span>💌</span> 조회수 {data?.views}
          </S.View>
        </S.FooterWrap>
      </S.CardWrap>

      <CustomBtn
        type="Md"
        fill={true}
        text="목록으로"
        onClick={onClickMoveToPage("/boards")}
      />

      <CummunityCommentListContainer
        boardId={router.query.communityId}
        writer={data?.user?.nickname}
      />
    </S.Wrap>
  );
};

export default CommunityDetailContainer;
