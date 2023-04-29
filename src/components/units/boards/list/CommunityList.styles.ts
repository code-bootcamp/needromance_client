import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3% 2%;
`;

export const Ranking = styled.section`
  display: flex;
  flex-direction: column;
  p {
    font-size: var(--font-size-lg);
    margin: 0px;

    @media ${breakPoints.tablet} {
      font-size: 1.5rem;
    }

    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
    }
  }
  width: 100%;
`;

export const MedalWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  justify-content: space-between;
  align-items: center;
  gap: 90px;

  @media ${breakPoints.tablet} {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));

    gap: 30px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));

    gap: 20px;
  }
`;

export const BestAnswerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
`;

export const SearchSection = styled.section`
  width: 100vw;
  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  /* left: calc(-50vw + 50%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--sub-bg-color);
  padding: 50px;
`;

export const InfoText = styled.p`
  font-size: 2rem;
  line-height: 4;

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
    line-height: 3;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.25rem;
    line-height: 3;
  }
`;
export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const SearchBox = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
`;

export const TagBox = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  /* justify-content: center; */
  gap: 10px;
  padding: 0px 5px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const HashTag = styled.div`
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

export const CounselWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LatestCounsel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  p {
    font-size: var(--font-size-lg);
    margin: 0px;

    @media ${breakPoints.tablet} {
      font-size: 1.5rem;
    }

    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-lg);
    }
  }

  button {
    width: 100px;
    height: 50px;
    border-radius: 30px;
    color: white;
    background-color: var(--point-color-green);
  }
`;

export const LatestCounselWriting = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
`;

export const AskCounsel = styled.p`
  text-decoration: underline;
  color: var(--point-color-green);
  cursor: pointer;
`;
