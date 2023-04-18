import styled from "@emotion/styled";
import { Modal } from "antd";
import {
  Icon_Bell,
  Icon_Exclamation,
} from "../../../../../commons/styles/icons";

export const ModalWrap = styled(Modal)`
  .ant-modal-content {
    width: 400px;
    height: 300px;
    background-color: #f0e9e0;
    border-radius: 8px;
    padding: 32px;
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
    margin-top: 32px;
  }

  .ant-btn {
    font-size: 14px;
    height: 40px;
    padding: 7px 15px;
    border-radius: 50px;
    font-family: inherit;
    width: 110px;
    background: none;
    border: none;
  }

  .ant-btn-default {
    color: #5f795a;
    border: 1px solid #5f795a;
  }

  .ant-btn-primary {
    color: #ffffff;
    background-color: #5f795a;
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
  font-size: 14px;
  color: #333333;
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
      width={400}
    >
      <TextWrap>
        <Icon>
          <Icon_Exclamation />
        </Icon>
        <Text>정말 회원을 탈퇴하시겠어요?</Text>
        <Text>회원 탈퇴를 하시면 지금까지 받은 상담내용이 사라집니다.</Text>
        {/* <SubText>취소된 예약은 되돌릴 수 없습니다.</SubText> */}
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
      width={400}
    >
      <TextWrap>
        <Icon>
          <Icon_Bell />
        </Icon>
        <Text>탈퇴처리가 완료되었습니다.</Text>
        <Text>로맨스가 필요해 서비스를 이용해주셔서 감사합니다.</Text>
      </TextWrap>
    </ConfirmWrap>
  );
};
