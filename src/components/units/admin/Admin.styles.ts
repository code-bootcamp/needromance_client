import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface ITabsItemProps {
  pageTabs?: number;
  index?: number;
  browserWidth?: number;
  openTabs?: boolean;
}

export const Wrapper = styled.div`
  min-height: 125vh;
  width: 100%;
  display: flex;
  position: relative;
  // antd table pagination style
  .ant-pagination-item-active {
    border: 1.5px solid var(--point-color-light-green);
    a {
      color: var(--point-color-light-green);
    }
  }
`;

export const TabsMenu = styled.div<ITabsItemProps>`
  position: absolute;
  font-size: var(--font-size-md);
  top: -35px;
  left: 20px;
  display: ${({ browserWidth = 769 }) =>
    browserWidth <= 768 ? "block" : "none"};
`;

export const TabsWrapper = styled.li<ITabsItemProps>`
  @keyframes closeTabs {
    from {
      left: 0px;
    }
    to {
      left: -250px;
    }
  }
  @keyframes openTabs {
    from {
      left: -250px;
    }
    to {
      left: 0px;
    }
  }

  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  z-index: 998;
  min-height: 125vh;

  left: ${({ openTabs }) => (openTabs ? "0px" : "-250px")};
  animation: ${({ openTabs }) =>
    openTabs
      ? "openTabs 0.6s forwards ease-out"
      : "closeTabs 0.6s forwards ease-out"};
  @media ${breakPoints.tablet} {
    border-right: 1px solid #eee;
    position: absolute;
    display: ${({ openTabs }) => (openTabs ? "flex" : "none")};
    ::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0;
      width: 125vw;
      min-height: 125vh;
      backdrop-filter: blur(2px);
      z-index: -1;
      display: ${({ openTabs }) => (openTabs ? "flex" : "none")};
    }
  }
  @media ${breakPoints.mobile} {
    border-right: 1px solid #eee;
    position: absolute;
    display: ${({ openTabs }) => (openTabs ? "flex" : "none")};
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 125vw;
      min-height: 125vw;
      backdrop-filter: blur(2px);
      z-index: -1;
      display: ${({ openTabs }) => (openTabs ? "flex" : "none")};
    }
  }
`;
export const TabsItem = styled.ul<ITabsItemProps>`
  display: flex;
  width: 120px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) =>
    props.pageTabs === props.index
      ? "var(--point-color-light-green)"
      : "#2c2c2c"};
`;
export const TableWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
`;
export const TableTitle = styled.div`
  font-size: var(--font-size-md);
  margin-bottom: 50px;
  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-md);
  }
`;
export const TableSearchBox = styled.div`
  margin-bottom: 50px;
`;
export const SearchTitle = styled.div`
  div:nth-of-type(1) {
    font-size: var(--font-size-md);
  }
  margin-bottom: 50px;
  @media ${breakPoints.mobile} {
    div:nth-of-type(1) {
      font-size: var(--font-mobile-size-md);
    }
    div:nth-of-type(2) {
      font-size: var(--font-mobile-size-sm);
    }
  }
`;
export const SearchFilterBox = styled.div`
  display: flex;
  align-items: center;
`;
export const TableBoardWrapper = styled.div`
  padding: 50px;
`;
export const TableUserWrapper = styled.div`
  padding: 50px;
`;
