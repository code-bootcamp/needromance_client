import styled from "@emotion/styled";
import { ChangeEventHandler, CSSProperties } from "react";

interface IInputProps {
  isValid?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
const Label = styled.label`
  font-family: var(--eng-font);
  color: #6b6b6b;
  font-size: 14px;
  margin-left: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: white;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px rgba(217, 214, 224, 0.25);

  border-radius: 8px;
  padding: 10px;
  font-family: var(--eng-font);
  font-size: 18px;
  color: #6b6b6b;
  margin: 0px 0px 5px 0px;

  /* background: ${(props: IInputProps) =>
    props.isValid ? `url("/img/check.png") no-repeat` : "none"};
  background-size: 1.3rem;
  background-position: 96% 50%; */
`;

export const InputBox = styled.div`
  position: relative;
`;
export default function BorderInput({
  label,
  placeholder,
  onChange,
  style,
  type,
  check,
}: {
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  type?: string;
  check?: boolean;
}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputBox>
        <Input
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          type={type}
          isValid={check}
        />
      </InputBox>
    </Wrapper>
  );
}
