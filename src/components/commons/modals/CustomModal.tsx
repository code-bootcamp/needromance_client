import { Modal } from "antd";
import * as S from "./CustomModal.styles";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const modalBodyStyle = {
  padding: "0px",
  margin: "-10px",
  background: "var(--sub-bg-color)",
  minHeight: "300px",
  borderRadius: "5px",
};

interface IModalProps {
  icontype?: string;
  openModal: boolean;
  text: string;
  ok?: string;
  cancel?: string;
  confirm?: string;
  onClickOk?: () => void | ((args: any) => void);
  onClickCancel?: () => void | ((args: any) => void);
  onClickConfirm?: () => void | ((args: any) => void);
  children?: JSX.Element | React.FC;
}

export default function CustomModal(props: IModalProps) {
  // icontype : warning(❗️) & check(✅)
  // openModal : 모달을 오픈하는 함수
  // ok: ok 버튼 내용
  // cancle: cancle 버튼 내용
  // confirm: confirm 버튼 내용
  // onClickOk : ok 함수
  // onClickCancel : cancle 함수
  // onClickConfirm : 확인하는 함수

  return (
    <>
      <Modal
        width="20rem"
        closable={false}
        centered={true}
        bodyStyle={modalBodyStyle}
        footer={null}
        open={props.openModal}
      >
        <S.ModalWrapper>
          {props.icontype === "warning" && (
            <ExclamationCircleOutlined
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--point-color-green)",
                marginTop: "50px",
              }}
            />
          )}

          {props.icontype === "check" && (
            <CheckCircleOutlined
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--point-color-green)",
                marginTop: "50px",
              }}
            />
          )}
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
