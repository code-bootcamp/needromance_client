import { useState } from "react";
import MyPageProfileDetail from "./detail/MyPageProfile.detail.container";
import MyPageProfileEdit from "./edit/MyPageProfile.edit.container";
import { IMyPageProps } from "../../MyPage.type";

const MyPageProfile = ({ myData, setMyData }: IMyPageProps) => {
  const [IsEdit, setIsEdit] = useState<boolean>(false);

  return (
    <>
      {IsEdit ? (
        <MyPageProfileEdit
          myData={myData}
          setMyData={setMyData}
          setIsEdit={setIsEdit}
        />
      ) : (
        <MyPageProfileDetail myData={myData} setIsEdit={setIsEdit} />
      )}
    </>
  );
};

export default MyPageProfile;
