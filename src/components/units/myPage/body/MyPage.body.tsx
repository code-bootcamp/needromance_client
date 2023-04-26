import { IMyPageProps } from "../MyPage.type";
import * as S from "./MyPage.body.style";
import MyPageBoard from "./board/MyPageBoard.container";
import MyPageComment from "./comment/MyPageComment.container";
import MyPageProfile from "./profile/MyPageProfile.container";
import MyPageNotification from "./notification/MyPageNotification.container";
import MyPageWithdrawal from "./withdrawal/MyPageWithdrawal.Modal";

const MyPageContent = ({ myData, setMyData, IsActive }: IMyPageProps) => {
  switch (IsActive) {
    case "notification":
      return (
        <S.Wrap>
          <MyPageNotification />
        </S.Wrap>
      );
    case "board":
      return (
        <S.Wrap>
          <MyPageBoard myData={myData} />
        </S.Wrap>
      );
    case "comment":
      return (
        <S.Wrap>
          <MyPageComment myData={myData} />
        </S.Wrap>
      );
    case "myProfile":
      return (
        <S.Wrap>
          <MyPageProfile myData={myData} setMyData={setMyData} />
        </S.Wrap>
      );
    case "withdrawal":
      return (
        <S.Wrap>
          <MyPageWithdrawal />
        </S.Wrap>
      );
    default:
      return <></>;
  }
};

export default MyPageContent;
