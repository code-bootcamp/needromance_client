import styled from "@emotion/styled";
import { ChangeEventHandler, CSSProperties } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoCheck } from "react-icons/go";
interface IInputProps {
  isValid?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3x;
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
  /* border: 1px solid var(--point-color-green); */
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 10px;
  font-family: var(--eng-font);
  font-size: 18px;
  color: #6b6b6b;
  margin: 5px 0px;
`;

export const InputBox = styled.div`
  position: relative;
`;

export const Check = styled(GoCheck)`
  display: ${(props: IInputProps) => (props.isValid ? "block" : "none")};
  position: absolute;
  top: 25%;
  right: 10px;
  font-size: 1rem;
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
        />
        <Check isValid={check} />
      </InputBox>
    </Wrapper>
  );
}
