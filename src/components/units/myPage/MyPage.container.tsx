import MyPageNav from "./nav/MyPageNav";
import * as S from "./MyPage.style";
import { useEffect, useState } from "react";
import MyPageContent from "./body/MyPage.body";
import { GetUserInfo } from "../../../commons/api/user";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../commons/store/atoms";

const MyPageContainer = () => {
  // data
  const [myData, setMyData] = useState<object>({});
  // PageNav active
  const [IsActive, setIsActive] = useState<string>("myProfile");
  // token
  const accessToken = useRecoilValue(accessTokenState);

  // 화면이 맨 처음 렌더링될 떄 데이터 가져옴
  useEffect(() => {
    getUserInformation();
  }, [setMyData]);

  // 로그인한 유저 정보
  const getUserInformation = async () => {
    const result = await GetUserInfo(accessToken);
    setMyData(result);
  };

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
