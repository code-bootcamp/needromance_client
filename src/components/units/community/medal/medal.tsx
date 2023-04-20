import styled from "@emotion/styled";

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
`;

const Ranking = styled.img`
  width: 70px;
  height: 70px;
`;

const Label = styled.label`
  font-family: var(--eng-font);
  font-size: 1.3rem;
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
