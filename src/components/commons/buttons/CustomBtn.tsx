import styled from "@emotion/styled";
import { CSSProperties, MouseEventHandler } from "react";
import { breakPoints } from "../../../commons/styles/media";

const Button = styled.button`
  border: none;
  font-size: var(--btn-font-size);
  padding: var(--btn-padding);
  border-radius: var(--btn-radius-lg);
  width: var(--btn-width-lg);
  height: var(--btn-height);
  @media ${breakPoints.tablet} {
    width: var(--btn-width-md);
  }
  @media ${breakPoints.mobile} {
    width: var(--btn-width-sm);
  }
`;

interface IBtn2Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  style?: CSSProperties;
}

export default function CustomBtn({ onClick, text, type, style }: IBtn2Props) {
  return (
    <Button style={style} type={type} onClick={onClick}>
      {text}
    </Button>
  );
}
