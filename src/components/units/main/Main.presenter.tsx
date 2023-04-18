import styled from "@emotion/styled";

import MainSection1 from "./section1/MainSection1";
import MainSection2 from "./section2/MainSection2";
import MainSection3 from "./section3/MainSection3";

const Wrapper = styled.div`
  width: 100%;
`;

export default function MainUI(): JSX.Element {
  return (
    <Wrapper>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
    </Wrapper>
  );
}
