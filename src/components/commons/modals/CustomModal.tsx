import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import * as S from "./CustomModal.styles";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface IModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  type: "userBan" | "test"; // 사용하고 싶은 모달의 사용 목적에 따라 이름을 지어주세요.
  handleTestFn?: () => void; // 모달의 ok 버튼을 누를시에 작동시키고 싶은 함수를 적어주세요. handle~~..
}

// modal body style
const modalBodyStyle = {
  padding: "0px",
  margin: "-10px",
  background: "var(--sub-bg-color)",
  minHeight: "300px",
  borderRadius: "5px",
};

export default function CustomModal(props: IModalProps) {
  // Admin.presenter.tsx  213 ~ 221 번째 줄에 모달 컴포넌트 적용시킨 예시가 있습니다.

  const handlePropsFn = () => {
    // 각자의 모달에서 props로 전달받은 함수를 작동시키기 위한 분기점
    if (props.handleTestFn) {
      props.handleTestFn();
      props.setOpenModal(false);
    }
    // 확인 버튼 누른 후 notice 확인 모달이 추가로 만들어져야한다면, 각자의 컴포넌트에서 추가로 만들어주세요.
  };
  return (
    <>
      {/* props로 type을 넘겨받은 문자열이 일치하는 것에 모달이 생성됩니다.(분기점)*/}
      {props.type === "userBan" && (
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
              <div>유저의 계정을 비활성화 하시겠습니까?</div>
            </S.ContentWrapper>
            <S.BtnWrapper>
              <button onClick={() => props.setOpenModal(false)}>취소</button>
              <button onClick={handlePropsFn}>확인</button>
            </S.BtnWrapper>
          </S.ModalWrapper>
        </Modal>
      )}
      {props.type === "test" && (
        <Modal
          width={400}
          closable={false}
          centered={true}
          bodyStyle={modalBodyStyle}
          footer={null}
          open={props.openModal}
        >
          <S.ModalWrapper>
            {/* 다른 아이콘을 사용하시면, antd 아이콘에서 찾아서 원하시는거 적용하시면 됩니다. */}
            <ExclamationCircleOutlined
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--point-color-green)",
                marginTop: "50px",
              }}
            />
            <S.ContentWrapper>
              <div>테스트입니다</div>
            </S.ContentWrapper>
            <S.BtnWrapper>
              <button onClick={() => props.setOpenModal(false)}>취소</button>
              <button onClick={handlePropsFn}>확인</button>
            </S.BtnWrapper>
          </S.ModalWrapper>
        </Modal>
      )}
    </>
  );
}
