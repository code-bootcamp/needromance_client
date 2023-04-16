import styled from "@emotion/styled";

const TopHeader = styled.header`
  width: 100vw;
  height: 30px;

  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);
  background-color: var(--point-color-brown);
`;

export default function LayoutTopHeader() {
  return <TopHeader>탑헤더입니다.</TopHeader>;
}
