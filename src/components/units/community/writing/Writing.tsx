import styled from "@emotion/styled";
import { FaCommentDots } from "react-icons/fa";

const Wrapper = styled.div`
  width: 900px;
  min-height: 120px;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-top: 1px solid var(--sub-bg-color);
  border-bottom: 1px solid var(--sub-bg-color);
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;

const Counselee = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounseleeImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const CounseleeName = styled.span``;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: blue;
`;

const Content = styled.div`
  width: 700px;
`;

const HashtagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Hashtag = styled.div`
  font-size: 13px;
`;

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Date = styled.span`
  font-size: 13px;
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
      <div>
        <CommentCount>
          <FaCommentDots />
          <span>27</span>
        </CommentCount>
        <Date>2023.04.18</Date>
      </div>
    </Wrapper>
  );
}
