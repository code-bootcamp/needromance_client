import { MouseEventHandler } from "react";
import styled from "@emotion/styled";

interface IBtnProps {
  onClick?: any;
  text?: string;
  type?: string; // 크기
  fill?: boolean; // 색상
  children?: JSX.Element;
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
  border: 1px solid var(--point-color-green);
  min-width: var(--btn-width-md);
  height: var(--btn-height);
  color: ${(props) => (props.fill ? "#fff" : "var(--point-color-green)")};
  background-color: ${(props) =>
    props.fill ? "var(--point-color-green)" : "#fff"};
  border: ${(props) =>
    props.fill ? "none" : "1px solid var(--point-color-green)"};
`;

const WrapperLg = styled(Wrapper)<IBtnProps>`
  border: 1px solid var(--point-color-green);
  min-width: var(--btn-width-lg);
  height: var(--btn-height);
  color: ${(props) => (props.fill ? "#fff" : " var(--point-color-green)")};
  background-color: ${(props) =>
    props.fill ? " var(--point-color-green)" : "#fff"};
  border: ${(props) =>
    props.fill ? "none" : "1px solid var(--point-color-green)"};
`;

export default function CustomBtn(props: IBtnProps) {
  return (
    <>
      {props.type === "Lg" && (
        <WrapperLg fill={props.fill} onClick={props.onClick}>
          {props.text}
          {props.children}
        </WrapperLg>
      )}
      {props.type === "Md" && (
        <WrapperMd fill={props.fill} onClick={props.onClick}>
          {props.text}
          {props.children}
        </WrapperMd>
      )}
      {props.type === "Sm" && (
        <WrapperSm fill={props.fill} onClick={props.onClick}>
          {props.text}
          {props.children}
        </WrapperSm>
      )}
    </>
  );
}
// chatgpt
