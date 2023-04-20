import styled from "@emotion/styled";
import { BsSearchHeartFill } from "react-icons/bs";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Ranking = styled.section`
  display: flex;
  flex-direction: column;
  p {
    font-size: var(--font-size-lg);
    padding: 0px;
  }
  width: 100%;
`;

export const MedalWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: space-between;
  align-items: center;
  gap: 90px;

  @media ${breakPoints.tablet} {
    width: 100%;
    gap: 50px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    gap: 40px;
  }
`;

export const BestAnswerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
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

  p {
    font-size: 2rem;
    line-height: 4;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const SearchBox = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  display: block;
  min-width: 600px;
  width: 100%;
  height: 45px;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid var(--point-color-beige);
  background-color: white;

  @media ${breakPoints.mobile} {
    min-width: 300px;
    /* width: 300px; */
  }
`;

export const SearchIcon = styled(BsSearchHeartFill)`
  position: absolute;
  color: var(--point-color-beige);
  font-size: var(--font-size-md);
  right: 15px;
  top: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const TagBox = styled.div`
  display: flex;

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
  /* width: 100%; */

  display: flex;
  flex-direction: column;
`;
