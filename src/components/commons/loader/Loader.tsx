import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blur = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px);
`;
const Logo = styled.img`
  width: 100px;
  height: 70px;
  animation: opacity 2s linear infinite;

  @keyframes opacity {
    0% {
      opacity: 90%;
    }
    100% {
      opacity: 10%;
    }
  }
`;

export default function Loader() {
  return (
    <Wrapper>
      <Blur />
      <Logo src="/img/logo/INR_logo.png" />
    </Wrapper>
  );
}
