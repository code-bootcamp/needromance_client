import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "antd";
import * as S from "./TestModal.styles";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const modalBodyStyle = {
  padding: "0px",
  margin: "-10px",
  background: "var(--sub-bg-color)",
  minHeight: "300px",
  borderRadius: "5px",
};

interface IModalProps {
  openModal: boolean;
  text: string;
  ok?: string;
  cancel?: string;
  confirm?: string;
  onClickOk?: () => void | ((args: any) => void);
  onClickCancel?: () => void | ((args: any) => void);
  onClickConfirm?: () => void | ((args: any) => void);
}

export default function TestModal(props: IModalProps) {
  return (
    <>
      <Modal
        width={400}
        closable={false}
        centered={true}
        bodyStyle={modalBodyStyle}
        footer={null}
        open={props.openModal}
      >
        <S.ModalWrapper>
          <ExclamationCircleOutlined
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--point-color-green)",
              marginTop: "50px",
            }}
          />
          <S.ContentWrapper>
            <div>{props.text}</div>
          </S.ContentWrapper>
          <S.BtnWrapper>
            {props.cancel && (
              <S.CancelBtn onClick={props.onClickCancel}>
                {props.cancel}
              </S.CancelBtn>
            )}
            {props.ok && (
              <S.OkBtn onClick={props.onClickOk}>{props.ok}</S.OkBtn>
            )}
            {props.confirm && (
              <S.ConfirmBtn onClick={props.onClickConfirm}>
                {props.confirm}
              </S.ConfirmBtn>
            )}
          </S.BtnWrapper>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}
