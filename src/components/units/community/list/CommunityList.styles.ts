import styled from "@emotion/styled";
import { BsSearchHeartFill } from "react-icons/bs";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ranking = styled.section`
  display: flex;
  flex-direction: column;
  p {
    font-size: var(--font-size-lg);
    padding: 0px;
  }
`;

export const MedalWrapper = styled.div`
  display: flex;
  gap: 80px;
`;

export const BestAnswerWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SearchSection = styled.section`
  width: 100vw;
  // 양쪽에 꽉차게 하기 위한 옵션
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--sub-bg-color);
  padding: 50px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SearchBox = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  min-width: 500px;
  height: 45px;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid var(--point-color-beige);
  background-color: white;
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
