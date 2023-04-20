import { MouseEventHandler } from "react";
import styled from "@emotion/styled";

interface IBtnProps {
  onClickMoveToPage?: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  type?: string;
  fill?: boolean;
}

// default 속성
const Wrapper = styled.button`
  font-size: var(--btn-font-size);
  padding: var(--btn-padding);
  border-radius: var(--btn-radius);
  border: none;
  cursor: pointer;
`;

const WrapperSm = styled(Wrapper)<IBtnProps>`
  border: 1px solid var(--point-color-green);
  color: ${(props) => (props.fill ? "#fff" : "var(--point-color-green)")};
  background-color: ${(props) =>
    props.fill ? "var(--point-color-green)" : "#fff"};
`;

const WrapperMd = styled(Wrapper)<IBtnProps>`
  width: var(--btn-width-md);
  height: var(--btn-height);
  color: ${(props) => (props.fill ? "#fff" : "var(--point-color-green)")};
  background-color: ${(props) =>
    props.fill ? "var(--point-color-green)" : "#fff"};
`;

const WrapperLg = styled(Wrapper)<IBtnProps>`
  width: var(--btn-width-lg);
  height: var(--btn-height);
  color: ${(props) => (props.fill ? "#fff" : "var(--point-color-green)")};
  background-color: ${(props) =>
    props.fill ? "var(--point-color-green)" : "#fff"};
`;

export default function CustomBtn(props: IBtnProps) {
  return (
    <>
      {props.type === "Lg" && (
        <WrapperLg fill={props.fill} onClick={props.onClickMoveToPage}>
          {props.text}
        </WrapperLg>
      )}
      {props.type === "Md" && (
        <WrapperMd fill={props.fill} onClick={props.onClickMoveToPage}>
          {props.text}
        </WrapperMd>
      )}
      {props.type === "Sm" && (
        <WrapperSm fill={props.fill} onClick={props.onClickMoveToPage}>
          {props.text}
        </WrapperSm>
      )}
    </>
  );
}
