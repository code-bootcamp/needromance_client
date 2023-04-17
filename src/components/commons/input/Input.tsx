import styled from "@emotion/styled";
import { ChangeEventHandler, CSSProperties } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3x;
`;
const Label = styled.label`
  font-family: var(--eng-font);

  color: #6b6b6b;
  font-size: 14px;
  margin-left: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: white;
  border: 1px solid var(--point-color-green);
  border-radius: 8px;
  padding: 10px;
  font-family: var(--eng-font);
  font-size: 18px;
  color: #6b6b6b;
  margin: 5px 0px;
`;

export default function BorderInput({
  label,
  placeholder,
  onChange,
  style,
}: {
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} onChange={onChange} style={style} />
    </Wrapper>
  );
}
