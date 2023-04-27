import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { BsSearchHeartFill } from "react-icons/bs";
import { ChangeEvent } from "react";

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
  align-items: center;
  gap: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const SearchBox = styled.div`
  width: 100%;
  /* max-width: 600px; */
  position: relative;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid var(--point-color-beige);
  background-color: white;
  font-size: var(--font-size-sm);

  @media ${breakPoints.mobile} {
    min-width: 300px;
    font-size: var(--font-mobile-size-sm);
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
interface IInputProps {
  type: string;
  name?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Search = (props: IInputProps) => {
  return (
    <SearchWrapper>
      <SearchBox>
        <SearchInput
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <SearchIcon onClick={props.onClick} />
      </SearchBox>
    </SearchWrapper>
  );
};

export default Search;
