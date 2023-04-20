import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  /* min-width: 900px; */
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
`;

const Answerer = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const AnswererImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100%;
`;

const AnswererName = styled.span``;

const AnswererText = styled.div`
  width: 100%;
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
        <AnswererImg src="img/community/default_profile.jpg" />
        <AnswererName>{name}</AnswererName>
      </Answerer>
      <AnswererText>{content}</AnswererText>
      <div>
        <Nametag></Nametag>
        <Heart></Heart>
      </div>
    </Wrapper>
  );
}
