import { ChangeEvent, useRef, useState } from "react";
import { UpdateUser } from "../../../../../../commons/api/user";
import { Icon_Plus } from "../../../../../../commons/styles/icons";
import CustomBtn from "../../../../../commons/buttons/CustomBtn";
import { IMyPageProps } from "../../../MyPage.type";
import * as S from "./../MyPageProfile.style";
import Popup from "../../../../../commons/modals/PopupModal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  accessTokenState,
  userProfileState,
} from "../../../../../../commons/store/atoms";
import CustomModal from "../../../../../commons/modals/CustomModal";

const MyPageProfileEdit = ({ myData, setMyData, setIsEdit }: IMyPageProps) => {
  const [data, setData] = useState({
    nickname: myData?.nickname ?? "",
    userImg: myData?.userImg ?? "/img/community/default_userImg.png",
  });
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  const accessToken = useRecoilValue(accessTokenState);
  const [, setUserProfile] = useRecoilState(userProfileState);
  // img upload
  const InputRef = useRef<HTMLInputElement>(null);
  const [errModal, setErrModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setData({ ...data, nickname: value });
  };

  const onClickUpload = () => {
    InputRef.current?.click();
  };

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("file", file);
    // check validation Image
    if (!file?.size) {
      setErrMsg("파일이 없습니다.");
      setErrModal(true);
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrMsg("파일이 너무 큽니다.(제한: 5MB)");
      setErrModal(true);
      return false;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      setErrMsg("파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)");
      setErrModal(true);
      return false;
    }

    // try {
    //   const result = await uploadFile({ variables: { file } });
    //   props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }
  };

  const handleUpdateUser = async () => {
    const { nickname, userImg } = data;

    try {
      const result = await UpdateUser(accessToken, nickname, userImg);
      setUserProfile(result); // 전역 스테이트 변경
      setMyData(result);
      setConfirm(true);
      setTimeout(() => {
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
                <Icon_Plus onClick={onClickUpload} />
              </S.IconWrap>
              <input
                type="file"
                ref={InputRef}
                style={{ display: "none" }}
                onChange={onChangeImage}
              />
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

      <CustomModal
        icontype="warning"
        openModal={errModal}
        text={errMsg}
        confirm="확인"
        onClickConfirm={() => setErrModal(false)}
      />

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
