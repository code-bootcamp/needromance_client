import { Dispatch, SetStateAction } from "react";
import CustomModal from "./CustomModal";

interface IPopupPropsType {
  text?: string;
  confirm?: boolean;
  setConfirm?: Dispatch<SetStateAction<boolean>>;
  warning?: boolean;
  setWarning?: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({
  text,
  confirm,
  setConfirm,
  warning,
  setWarning,
}: IPopupPropsType) => {
  return (
    <>
      <CustomModal
        icontype="check"
        openModal={confirm}
        text={text}
        confirm="확인"
        onClickConfirm={() => setConfirm(false)}
      />

      <CustomModal
        icontype="warning"
        openModal={warning}
        text="오류가 발생하여 요청한 작업을 완료할 수 없습니다."
        confirm="확인"
        onClickConfirm={() => setWarning(false)}
      />
    </>
  );
};

export default Popup;
