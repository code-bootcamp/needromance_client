import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.header`
  width: 100vw;
  height: 90px;
  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);
  background-color: var(--sub-bg-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-family: var(--logo-font);
  font-weight: bolder;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: var(--point-color-brown);
  &:hover {
    color: var(--point-color-brown);
  }
`;

const LogoImage = styled.img`
  width: 53px;
`;

export default function LayoutHeader() {
  return (
    <Wrapper>
      <Link href={"/"}>
        <Logo>
          <LogoImage src="img/logo/INR_logo.png" />
          <span>로맨스가 필요해</span>
        </Logo>
      </Link>
    </Wrapper>
  );
}
