import * as S from "./MyPage.body.style";
import { IMyPageProps } from "../MyPage.type";
// components
import MyPageBoard from "./board/MyPageBoard.container";
import MyPageComment from "./comment/MyPageComment.container";
import MyPageProfile from "./profile/MyPageProfile.container";

const MyPageContent = ({ myData, setMyData, IsActive }: IMyPageProps) => {
  switch (IsActive) {
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
    default:
      return <></>;
  }
};

export default MyPageContent;
