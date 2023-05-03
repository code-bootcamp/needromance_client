import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const Line = styled.hr`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  width: 100%;
`;

export const Textarea = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  width: 100%;
  height: 140px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3px;

  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const Btn_line = styled.button`
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  border: 1px solid var(--point-color-green);
  color: var(--point-color-green);
`;

export const Btn_full = styled.button`
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  background-color: var(--point-color-green);
  color: #fff;
`;
