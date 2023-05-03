import { useRouter } from "next/router";
import CustomBtn from "../../../commons/buttons/CustomBtn";
import Tag from "../../../commons/hashtag/HashTag";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import CummunityCommentListContainer from "../../communityComment/list/CommunityCommentList.container";
import * as S from "./CommunityDetail.style";
import { getDate } from "../../../../commons/libraries/getDate";
import { DeleteBoard, GetBoard } from "../../../../commons/api/boards";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../commons/store/atoms";
import Popup from "../../../commons/modals/PopupModal";
import { userProfileState } from "../../../../commons/store/atoms";
import Dompurify from "dompurify";

const CommunityDetailContainer = () => {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  // data
  const [data, setData] = useState(null);
  const [checkUser, setCheckUser] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  // 유저 정보
  const userInfo = useRecoilValue(userProfileState);
  // 토큰
  const accessToken = useRecoilValue(accessTokenState);

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴
  useEffect(() => {
    fetch();
    getUserInformation();
  }, [router.query.communityId]);

  const fetch = async () => {
    const result = await GetBoard(Number(router.query.communityId));
    setData(result);
  };

  const getUserInformation = () => {
    setCheckUser(userInfo);
  };

  const handleDeleteBoard = async () => {
    try {
      await DeleteBoard(accessToken, Number(router.query.communityId));
      setConfirm(true);
      setTimeout(() => {
        setConfirm(false);
        router.push("/boards");
      }, 1200);
    } catch (error) {
      setWarning(true);
    }
  };

  console.log("***토큰:", accessToken);
  console.log("***유저:", checkUser);

  return (
    <>
      <S.Wrap>
        <S.CardWrap>
          {checkUser?.id === data?.user?.id && (
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
          )}
          <S.Title>
            <span>Q.</span>
            {data?.title}
          </S.Title>
          <S.InnerWrap>
            <S.LeftWrap>
              <S.Contents>
                {typeof window !== "undefined" && (
                  <div
                    style={{}}
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(data?.contents),
                    }}
                  ></div>
                )}
              </S.Contents>
            </S.LeftWrap>
            <S.RigthWrap>
              <S.StampWrap>
                {data?.user?.userImg ? (
                  <S.ProfileImg src={data?.user?.userImg} />
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
              <span>💌 조회수</span>
              {data?.views}
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
          checkUser={checkUser}
          boardId={router.query.communityId}
          writer={data?.user?.nickname}
          onlyWriter={data?.user?.id === checkUser?.id}
        />
      </S.Wrap>

      <Popup
        text="게시물이 삭제되었습니다."
        confirm={confirm}
        setConfirm={setConfirm}
        warning={warning}
        setWarning={setWarning}
      />
    </>
  );
};

export default CommunityDetailContainer;
