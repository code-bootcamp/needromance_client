import MyPageNav from "./nav/MyPageNav";
import * as S from "./MyPage.style";
import { useEffect, useState } from "react";
import MyPageContent from "./body/MyPage.body";
import { accessToken } from "../../../commons/api/token";
import { GetUserInfo } from "../../../commons/api/user";

const MyPageContainer = () => {
  const [IsActive, setIsActive] = useState<string>("myProfile");
  const [myData, setMyData] = useState<object>({});

  // 로그인한 유저 정보
  const getUserInformation = async () => {
    const result = await GetUserInfo(accessToken); //토큰 추후에 리코일로 교체하기
    setMyData(result);
  };

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴
  useEffect(() => {
    getUserInformation();
  }, [setMyData]);

  return (
    <S.MyPageWrap>
      <MyPageNav
        myData={myData}
        IsActive={IsActive}
        setIsActive={setIsActive}
      />
      <MyPageContent
        myData={myData}
        setMyData={setMyData}
        IsActive={IsActive}
      />
    </S.MyPageWrap>
  );
};
export default MyPageContainer;
