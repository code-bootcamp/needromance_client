import styled from "@emotion/styled";
import { Modal } from "antd";
import {
  Icon_Bell,
  Icon_Exclamation,
} from "../../../../../commons/styles/icons";

export const ModalWrap = styled(Modal)`
  .ant-modal-content {
    width: 20rem;
    height: 18rem;
    background-color: #f0e9e0;
    border-radius: 8px;
    padding: 2rem;
  }

  .ant-modal-header {
    display: none;
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .ant-modal-footer {
    border-top: 0;
    margin-top: 2rem;
  }

  .ant-btn {
    background: none;
    border: none;
    font-size: var(--btn-font-size);
    padding: var(--btn-padding);
    border-radius: var(--btn-radius-lg);
    font-family: inherit;
    height: var(--btn-height);
    width: var(--btn-width-md);
  }

  .ant-btn-default {
    border: 1px solid var(--point-color-green);

    span {
      color: var(--point-color-green);
    }
  }

  .ant-btn-primary {
    background-color: var(--point-color-green);
    span {
      color: #ffffff;
    }
  }
`;

const ConfirmWrap = styled(ModalWrap)`
  .ant-btn-default {
    display: none;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  margin-bottom: 20px;
  font-size: 40px;
  color: var(--point-color-light-green);
`;

const Text = styled.p`
  font-size: var(--font-size-sm);
  color: #2c2c2c;
  margin: 0;
`;

export const WidthdrawalModal = ({ open, setOpen, setConfirm }) => {
  return (
    <ModalWrap
      centered
      open={open}
      onOk={() => {
        setOpen(false);
        setConfirm(true);
      }}
      onCancel={() => setOpen(false)}
      width="20rem"
    >
      <TextWrap>
        <Icon>
          <Icon_Exclamation />
        </Icon>
        <Text>정말 회원을 탈퇴하시겠어요?</Text>
        {/* <Text>회원 탈퇴를 하시면 지금까지 받은 상담내용이 사라집니다.</Text> */}
      </TextWrap>
    </ModalWrap>
  );
};

export const ConfirmModal = ({ confirm, setConfirm }) => {
  return (
    <ConfirmWrap
      centered
      open={confirm}
      onOk={() => setConfirm(false)}
      // onCancel={() => setConfirm(false)}
      width="20rem"
    >
      <TextWrap>
        <Icon>
          <Icon_Bell />
        </Icon>
        <Text>탈퇴처리가 완료되었습니다.</Text>
      </TextWrap>
    </ConfirmWrap>
  );
};
