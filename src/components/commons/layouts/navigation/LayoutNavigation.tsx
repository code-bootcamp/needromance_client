import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.nav`
  width: 100vw;
  height: 40px;
  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);

  border: solid var(--sub-bg-color);
  border-width: 1px 0px;
`;

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;

  a {
    color: var(--point-color-brown);
  }
`;

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <Navigation>
        <Link href={"/chatgpt"}>
          <a>너의 마음을 말해줘</a>
        </Link>
        <Link href={"/community"}>
          <a>대화공간</a>
        </Link>
      </Navigation>
    </Wrapper>
  );
}
