import { useState } from "react";
import MyPageProfileDetail from "./detail/MyPageProfile.detail.container";
import MyPageProfileEdit from "./edit/MyPageProfile.edit.container";

const MyPageProfile = () => {
  const [IsEdit, setIsEdit] = useState<boolean>(false);
  return (
    <>
      {IsEdit ? (
        <MyPageProfileEdit setIsEdit={setIsEdit} />
      ) : (
        <MyPageProfileDetail setIsEdit={setIsEdit} />
      )}
    </>
  );
};

export default MyPageProfile;
