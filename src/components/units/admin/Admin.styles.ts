import styled from "@emotion/styled";

interface ITabsItemProps {
  pageTabs: number;
  index?: number;
}

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
`;
export const TabsWrapper = styled.div`
  width: 150px;
  background-color: #fff;
  border-left: 1px solid var(--point-color-beige);
  border-top: 1px solid var(--point-color-beige);
  border-bottom: 1px solid var(--point-color-beige);
`;
export const TabsItem = styled.button<ITabsItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--point-color-beige);
  font-size: var(--font-size-md);
  font-weight: ${(props) => (props.pageTabs === props.index ? 800 : 400)};
  background-color: ${(props) =>
    props.pageTabs === props.index ? "var(--sub-bg-color)" : "#fff"};
`;
export const TableWrapper = styled.div`
  width: calc(100% - 150px);
  background-color: #fff;
  border: 1px solid var(--point-color-beige);
`;
export const TableTitle = styled.div`
  font-size: var(--font-size-md);
  margin-bottom: 50px;
`;
export const TableSearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
export const SearchTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:nth-of-type(1) {
    font-size: var(--font-size-md);
  }
`;
export const SearchFilterBox = styled.div`
  display: flex;
  align-items: center;
  > input {
    border: 1px solid var(--point-color-beige);
    width: 300px;
    padding: 10px;
    background-color: var(--sub-bg-color);
    margin-left: 10px;
    ::placeholder {
      color: #2c2c2c;
    }
  }
  .DropdownBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      border: 1px solid var(--point-color-beige);
      color: #2c2c2c;
    }
    width: 80px;
    height: 45px;
  }
`;
export const TableBoardWrapper = styled.div`
  padding: 50px;
`;

//

export const TableUserWrapper = styled.div`
  padding: 50px;
`;
