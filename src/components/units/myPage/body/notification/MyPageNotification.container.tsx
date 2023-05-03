import { Icon_Bell, Icon_Close } from "../../../../../commons/styles/icons";
import * as S from "./MyPageNotification.style";

const MyPageNotification = () => {
  const handleDeleteNoti = () => {
    console.log("삭제 클릭");
  };

  return (
    <>
      <S.NotificationCard>
        <S.IconWrap>
          <Icon_Bell />
        </S.IconWrap>
        <S.ContentWrap>
          <S.Title>
            답글
            <span>2023.04.07</span>
          </S.Title>
          <S.Content>게시글에 000님이 답변을 남겨주셨습니다.</S.Content>
        </S.ContentWrap>
        <S.DeleteWrap onClick={handleDeleteNoti}>
          <Icon_Close fontSize="16px" />
        </S.DeleteWrap>
      </S.NotificationCard>
      <S.NotificationCard>
        <S.IconWrap>
          <Icon_Bell />
        </S.IconWrap>
        <S.ContentWrap>
          <S.Title>
            답변 채택
            <span>2023.04.01</span>
          </S.Title>
          <S.Content>답변이 채택되어 내공 10이 적립되었습니다.</S.Content>
        </S.ContentWrap>
        <S.DeleteWrap onClick={handleDeleteNoti}>
          <Icon_Close fontSize="16px" />
        </S.DeleteWrap>
      </S.NotificationCard>
    </>
  );
};

export default MyPageNotification;
