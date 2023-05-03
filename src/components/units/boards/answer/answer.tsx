import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { TiHeart } from "react-icons/ti";

export default function Answer({
  userImg,
  name,
  content,
  index,
  likes,
}: {
  userImg: string;
  name: string;
  content: string;
  index: number;
  likes: number;
}) {
  return (
    <Wrapper>
      <Answerer>
        {userImg ? (
          <AnswererImg src={userImg} />
        ) : (
          <AnswererImg src="img/community/default_profile.jpg" />
        )}

        <AnswererName>{name}</AnswererName>
      </Answerer>
      <AnswererText>{content}</AnswererText>

      <RankingSeal>
        <RankingText>{index}등</RankingText>
      </RankingSeal>
      <TagHeartWrapper>
        <Heart>
          <TiHeart style={{ color: "#ff7d93", fontSize: "20px" }} />
          <span>{likes}</span>
        </Heart>
      </TagHeartWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* min-width: 1150px; */
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media ${breakPoints.tablet} {
    /* min-width: 100px; */
    padding: 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 10px;
  }
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
  letter-spacing: -1px;

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

const RankingSeal = styled.div`
  position: absolute;
  width: 60px;
  height: 35px;
  /* border-radius: 100%; */
  top: 0px;
  right: -25px;
  background-color: #ffdb57;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
`;

const RankingText = styled.div`
  width: max-content;
  height: 30px;
  padding: 15px;
  display: flex;
  align-items: center;
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
