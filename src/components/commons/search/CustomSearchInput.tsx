import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { ChangeEvent, KeyboardEvent } from "react";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";

export const SearchSection = styled.section`
  width: 100vw;
  position: relative;
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
  position: relative;
  .anticon-close-circle {
    position: absolute;
    top: 15px;
    right: 50px;
    font-size: var(--font-size-sm);
    color: var(--heavy-gary-color);
  }
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid var(--point-color-beige);
  background-color: var(--white-bg-color);
  font-size: var(--font-size-sm);

  @media ${breakPoints.mobile} {
    min-width: 300px;
    font-size: var(--font-mobile-size-sm);
  }
`;

export const BtnWrap = styled.div`
  color: var(--point-color-beige);
  font-size: var(--font-size-md);

  position: absolute;
  right: 15px;
  top: 12px;
  display: flex;
  gap: 10px;
`;

export const ResetBtn = styled(CloseOutlined)`
  color: var(--white-bg-color);
  font-size: var(--font-size-sm);
  width: var(--font-size-md);
  height: var(--font-size-md);
  line-height: var(--font-size-md);
  text-align: center;
  background-color: var(--light-gary-color);
  border-radius: 50%;
`;

export const SearchIcon = styled(HeartFilled)`
  color: var(--point-color-beige);
  font-size: var(--font-size-md);
  &:hover {
    cursor: pointer;
  }
`;

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClickClear: () => void;
}

const CustomSearchInput = (props: IInputProps) => {
  return (
    <SearchWrapper>
      <SearchBox>
        <SearchInput
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        />
        <BtnWrap>
          {props.value && <ResetBtn onClick={props.onClickClear} />}
          <SearchIcon onClick={props.onClick} />
        </BtnWrap>
      </SearchBox>
    </SearchWrapper>
  );
};

export default CustomSearchInput;
