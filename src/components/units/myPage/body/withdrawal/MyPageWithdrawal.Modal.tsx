import { DeleteUser, GetUserInfo } from "../../../../../commons/api/user";
import { ChangeEvent, useEffect, useState } from "react";
import { accessToken } from "../../../../../commons/api/token";
import CustomModal from "../../../../commons/modals/CustomModal";
import { Modal } from "antd";
import * as S from "../../../../commons/modals/CustomModal.styles";
import BorderInput from "../../../../commons/input/Input";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../../commons/store/atoms";

const modalBodyStyle = {
  padding: "0px",
  margin: "-10px",
  background: "var(--sub-bg-color)",
  minHeight: "300px",
  borderRadius: "5px",
};

export const WidthdrawalModal = ({ open, setOpen, setCheck }) => {
  return (
    <CustomModal
      icontype="warning"
      openModal={open}
      text="정말 회원을 탈퇴하시겠어요?"
      ok="다음"
      cancel="취소"
      onClickOk={() => {
        setOpen(false);
        setCheck(true);
      }}
      onClickCancel={() => setOpen(false)}
    />
  );
};

export const InputModal = ({ check, setCheck, setConfirm, setWarning }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { onClickMoveToPage } = useMoveToPage();
  const accessToken = useRecoilValue(accessTokenState);

  const onChangeInput =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputs({ ...inputs, [name]: value });
    };

  const Withdrawal = async () => {
    const { email, password } = inputs;
    if (email === "" && password === "") return;

    try {
      const result = await DeleteUser(accessToken, email, password);
      if (result.response.status === 401) {
        setCheck(false);
        setWarning(true);
        return;
      }
      setConfirm(true);
      onClickMoveToPage("/");
    } catch (error) {
      setWarning(true);
      setInputs({ email: "", password: "" });
    }
  };

  return (
    <Modal
      width="20rem"
      closable={false}
      centered={true}
      bodyStyle={modalBodyStyle}
      footer={null}
      open={check}
    >
      <S.ModalWrapper>
        <S.ContentWrapper>
          <p>본인인증</p>
          <BorderInput
            placeholder="이메일"
            onChange={onChangeInput("email")}
            autoComplete="off"
          />
          <BorderInput
            type="password"
            placeholder="비밀번호"
            onChange={onChangeInput("password")}
            autoComplete="off"
          />
        </S.ContentWrapper>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setCheck(false)}>취소</S.CancelBtn>
          <S.OkBtn
            onClick={() => {
              Withdrawal();
            }}
          >
            탈퇴
          </S.OkBtn>
        </S.BtnWrapper>
      </S.ModalWrapper>
    </Modal>
  );
};
