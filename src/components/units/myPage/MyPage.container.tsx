import MyPageNav from "./nav/MyPageNav";
import * as S from "./MyPage.style";
import { useState } from "react";
import MyPageContent from "./body/MyPage.body";

const MyPageContainer = () => {
  const [IsActive, setIsActive] = useState<string>("notification");

  return (
    <S.MyPageWrap>
      <MyPageNav IsActive={IsActive} setIsActive={setIsActive} />
      <MyPageContent IsActive={IsActive} />
    </S.MyPageWrap>
  );
};
export default MyPageContainer;
