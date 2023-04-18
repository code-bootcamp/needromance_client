import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
`;

const Answerer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnswererImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100%;
`;

const AnswererName = styled.span``;

const AnswerText = styled.div`
  width: 700px;
  padding: 30px 0px;
`;

const Nametag = styled.div``;

const Heart = styled.div``;

export default function Answer({
  name,
  content,
}: {
  name: string;
  content: string;
}) {
  return (
    <Wrapper>
      <Answerer>
        <AnswererImg src="img/community/default_profile.png" />
        <AnswererName>{name}</AnswererName>
      </Answerer>
      <AnswerText>{content}</AnswerText>
      <div>
        <Nametag></Nametag>
        <Heart></Heart>
      </div>
    </Wrapper>
  );
}
