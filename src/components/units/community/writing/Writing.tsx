import styled from "@emotion/styled";
import { FaCommentDots } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
`;

const Counselee = styled.div`
  width: 15%;
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
`;

const CounseleeName = styled.span``;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 5px;
`;

const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const HashtagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0px 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #baa08f;
  font-size: 1rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
  color: var(--point-color-beige);
`;

const Heart = styled.div``;

export default function Writing({
  name,
  content,
}: {
  name: string;
  content: string;
}) {
  return (
    <Wrapper>
      <Counselee>
        <CounseleeImg src="img/community/default_profile.png" />
        <CounseleeName>{name}</CounseleeName>
      </Counselee>
      <ContentWrapper>
        <Content>{content}</Content>
        <HashtagWrapper>
          <Hashtag>#남사친</Hashtag>
          <Hashtag>#남친</Hashtag>
          <Hashtag>#질투</Hashtag>
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
