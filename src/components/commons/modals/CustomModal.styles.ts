import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const ContentWrapper = styled.div`
  margin-top: 50px;
  font-size: var(--font-size-md);
  margin-bottom: 50px;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > button {
    font-size: var(--font-size-md);
    width: var(--btn-width-md);
    height: var(--btn-height);
    border-radius: var(--btn-radius);
  }
`;

const CommonBtnStyle = styled.button`
  font-size: var(--font-size-md);
  width: var(--btn-width-md);
  height: var(--btn-height);
  border-radius: var(--btn-radius);
`;

export const CancelBtn = styled(CommonBtnStyle)`
  /* background-color: #fff; */
  color: var(--point-color-green);
  border: 1px solid var(--point-color-green);
`;

export const OkBtn = styled(CommonBtnStyle)`
  background-color: var(--point-color-green);
  color: #fff;
`;

export const ConfirmBtn = styled(CommonBtnStyle)`
  background-color: var(--point-color-green);
  color: #fff;
`;
