import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { TiHeart } from "react-icons/ti";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
  /* padding: 30px 30px; */
  padding: 30px;
`;

const Answerer = styled.div`
  padding-right: 15px;
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

  @media ${breakPoints.tablet} {
    width: 60px;
    height: 60px;
  }

  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const AnswererName = styled.span`
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

const AnswererText = styled.div`
  width: 100%;
  padding-right: 5%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const TagHeartWrapper = styled.div`
  position: absolute;
  top: 45%;
  right: 3%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const RankingTag = styled.div`
  position: relative;
  width: 50px;
  height: 100px;
`;

const RankingText = styled.div`
  position: absolute;
  width: max-content;
  height: 30px;
  padding: 8px;
  top: 3;
  right: 3;
`;

const RankingSeal = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  top: 0px;
  right: 0px;
`;

const Heart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* font-size: 0.8rem; */

  span {
    color: #7f6350;
  }
`;

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
      <RankingTag>
        <RankingSeal src="img/community/badge.png" />
        <RankingText>Best1</RankingText>
      </RankingTag>

      <TagHeartWrapper>
        <Heart>
          <TiHeart style={{ color: "#ff7d93", fontSize: "20px" }} />
          <span>22</span>
        </Heart>
      </TagHeartWrapper>
    </Wrapper>
  );
}
