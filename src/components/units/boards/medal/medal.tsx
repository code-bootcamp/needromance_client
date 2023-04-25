import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

const BottomCircle = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--point-color-beige);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 85px;
    height: 85px;
  }

  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const Ranking = styled.img`
  width: 70px;
  height: 70px;

  @media ${breakPoints.tablet} {
    width: 60px;
    height: 60px;
  }

  @media ${breakPoints.mobile} {
    width: 40px;
    height: 40px;
  }
`;

const Label = styled.label`
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export default function Medal({
  label,
  ranking,
}: {
  label?: string;
  ranking: string;
}) {
  return (
    <Wrapper>
      <BottomCircle>
        <Ranking src={`img/community/medal/${ranking}.png`} alt="등급 메달" />
      </BottomCircle>
      <Label>{label}</Label>
    </Wrapper>
  );
}
