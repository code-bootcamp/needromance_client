import * as S from "./../MyPageProfile.style";
import { ChangeEvent, useRef, useState } from "react";
import { Icon_Plus } from "../../../../../../commons/styles/icons";
import CustomBtn from "../../../../../commons/buttons/CustomBtn";
import { IMyPageProps } from "../../../MyPage.type";
// G-state
import { useRecoilState, useRecoilValue } from "recoil";
import {
  accessTokenState,
  userProfileState,
} from "../../../../../../commons/store/atoms";
// modal
import CustomModal from "../../../../../commons/modals/CustomModal";
import Popup from "../../../../../commons/modals/PopupModal";
// api
import { UpdateUser } from "../../../../../../commons/api/user";

const MyPageProfileEdit = ({ myData, setMyData, setIsEdit }: IMyPageProps) => {
  const [nickname, setNickname] = useState(myData?.nickname ?? "");
  const [confirm, setConfirm] = useState(false);
  const [warning, setWarning] = useState(false);
  const accessToken = useRecoilValue(accessTokenState);
  const [, setUserProfile] = useRecoilState(userProfileState);
  // img upload
  const InputRef = useRef<HTMLInputElement>(null);
  const [errModal, setErrModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [preImg, setPreImg] = useState("");
  const [savefile, setSaveFile] = useState(null);

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNickname(value);
  };

  const onClickUpload = () => {
    InputRef.current?.click();
  };

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
    if (!file) {
      return;
    }
    // 업로드된 이미지 미리보기
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreImg(reader.result);
    };
    // formData형식으로 state에 담기
    const formData = new FormData();
    formData.append("file", file);
    setSaveFile(formData);
  };

  const handleUpdateUser = async () => {
    if (savefile === null) {
      setErrMsg("프로필 사진을 변경해주세요!");
      setErrModal(true);
      return false;
    }
    try {
      const result = await UpdateUser(accessToken, String(nickname), savefile);
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
              <S.Input onChange={onChangeNickname} value={nickname} />
            </S.List>
            <S.List>
              <S.ProfileImg
                src={
                  preImg
                    ? preImg
                    : myData?.userImg
                    ? myData?.userImg
                    : "/img/community/default_userImg.png"
                }
                alt="프로필 사진"
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
            type="button"
            text="취소"
            onClick={() => setIsEdit(false)}
            style={{
              width: "var(--btn-width-md)",
              border: "1px solid var(--point-color-green)",
              color: "var(--point-color-green)",
            }}
          />
          <CustomBtn
            type="button"
            text="수정"
            onClick={() => handleUpdateUser()}
            style={{
              width: "var(--btn-width-md)",
              backgroundColor: "var(--point-color-green)",
              color: "#fff",
            }}
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
