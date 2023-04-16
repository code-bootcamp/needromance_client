import styled from "@emotion/styled";
import Link from "next/link";

const TopHeader = styled.header`
  width: 100vw;
  height: 30px;

  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);
  background-color: var(--point-color-brown);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 30px;
  padding: 3px;
`;

const Menu = styled.a`
  color: white;
  cursor: pointer;
`;

export default function LayoutTopHeader() {
  return (
    <TopHeader>
      <Link href={"/signin"}>
        <Menu>로그인</Menu>
      </Link>
      <Link href={"/signup"}>
        <Menu>회원가입</Menu>
      </Link>
    </TopHeader>
  );
}
