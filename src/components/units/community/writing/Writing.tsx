import styled from "@emotion/styled";
import { FaCommentDots } from "react-icons/fa";
import { breakPoints } from "../../../../commons/styles/media";
import Tag from "../../../commons/hashtag/HashTag";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 330px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
  padding: 30px 30px;

  @media ${breakPoints.tablet} {
    padding: 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;

const Counselee = styled.div`
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const CounseleeImg = styled.img`
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

const CounseleeName = styled.span`
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 5px;
`;

const Content = styled.div`
  width: 100%;
  padding-right: 8%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const HashtagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  /* padding: 0px 0px; */
`;

const Hashtag = styled.div`
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: var(--font-size-xs);
  border-radius: 3px;
  background-color: #cfbbae;
  color: white;

  &:hover {
    background-color: #baa08f;
    cursor: pointer;
  }
`;

const CommentDateWrapper = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const CommentCount = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #8e796b;
  font-size: 1rem;
  right: 15px;
  bottom: 50%;
`;

const Date = styled.span`
  position: absolute;
  font-size: 0.8rem;
  color: var(--point-color-beige);
  right: 0;
  bottom: 20px;
`;

const Heart = styled.div``;

export default function Writing({
  name,
  content,
  tags,
}: {
  name: string;
  content: string;
  tags?: string[];
}) {
  return (
    <Wrapper>
      <Counselee>
        <CounseleeImg src="img/community/default_profile.jpg" />
        <CounseleeName>{name}</CounseleeName>
      </Counselee>

      <ContentWrapper>
        <Content>{content}</Content>
        <HashtagWrapper>
          <Tag tags={tags} />
        </HashtagWrapper>
      </ContentWrapper>
      <CommentDateWrapper>
        <CommentCount>
          <FaCommentDots />
          <span>27</span>
        </CommentCount>
        <Date>2023.04.18</Date>
      </CommentDateWrapper>
    </Wrapper>
  );
}
