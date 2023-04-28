import { useEffect, useState } from "react";
import { UpdateUser } from "../../../../../../commons/api/user";
import { Icon_Plus } from "../../../../../../commons/styles/icons";
import CustomBtn from "../../../../../commons/buttons/CustomBtn";
import { IMyPageProps } from "../../../MyPage.type";
import * as S from "./../MyPageProfile.style";
import CustomModal from "../../../../../commons/modals/CustomModal";
import Popup, { PopupSuccess } from "../../../../../commons/modals/PopupModal";

const MyPageProfileEdit = ({ myData, setMyData, setIsEdit }: IMyPageProps) => {
  const [data, setData] = useState({
    nickname: myData?.nickname ?? "",
    userImg: myData?.userImg ?? "/img/community/default_userImg.png",
  });
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);

  const onChangeNickname = (event) => {
    const { value } = event.target;
    setData({ ...data, nickname: value });
  };

  const handleUpdateUser = async () => {
    const { nickname, userImg } = data;

    try {
      const result = await UpdateUser(nickname, userImg);
      setMyData(result);
      setConfirm(true);
      await setTimeout(() => {
        setConfirm(false);
        setIsEdit(false);
      }, 1200);
    } catch (error) {
      setWarning(true);
    }
  };

  return (
    <>
      <S.ProfileWrap>
        <S.Row>
          <S.ListWrap>
            <S.List>닉네임</S.List>
            <S.List>프로필사진</S.List>
            <S.List>이메일</S.List>
            <S.List>회원등급</S.List>
          </S.ListWrap>
          <S.ListWrap>
            <S.List>
              <S.Input onChange={onChangeNickname} value={data.nickname} />
            </S.List>
            <S.List>
              <S.ProfileImg
                src={myData?.userImg ?? "/img/community/default_userImg.png"}
              />

              <S.IconWrap>
                <Icon_Plus />
              </S.IconWrap>
            </S.List>
            <S.List>{myData?.email}</S.List>
            <S.List>{myData?.point}</S.List>
          </S.ListWrap>
        </S.Row>
        <S.BtnWrap>
          <CustomBtn
            type="Md"
            fill={false}
            text="취소"
            onClick={() => setIsEdit(false)}
          />
          <CustomBtn
            type="Md"
            fill={true}
            text="수정"
            onClick={() => handleUpdateUser()}
          />
        </S.BtnWrap>
      </S.ProfileWrap>

      <Popup
        text="수정이 완료되었습니다."
        confirm={confirm}
        setConfirm={setConfirm}
        warning={warning}
        setWarning={setWarning}
      />
    </>
  );
};

export default MyPageProfileEdit;
