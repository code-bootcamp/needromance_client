import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const NavWrap = styled.nav`
  background-color: #eee;

  @media ${breakPoints.mobile} {
    display: ${(props) => (props.openNav ? "block" : "none")};
    position: relative;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      display: block;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(2px);
      z-index: 100;
    }
  }

  @media ${breakPoints.tablet} {
    display: ${(props) => (props.openNav ? "block" : "none")};
    position: relative;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      display: block;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(2px);
      z-index: 100;
    }
  }
`;

export const MenuWrap = styled.div`
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  border-right: 1px solid #eee;

  @media ${breakPoints.mobile} {
    position: absolute;
    left: 0;
    z-index: 101;
  }

  @media ${breakPoints.tablet} {
    position: absolute;
    left: 0;
    z-index: 101;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.125rem;
`;

export const ProfileImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Nickname = styled.p`
  margin-top: 0.625rem;
  font-size: 1rem;
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #eee;
`;

export const ListsWrap = styled.ul`
  padding: 3.125rem;
  background-color: #fff;
`;

export const List = styled.li`
  width: 120px;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Name = styled.span<{ active: boolean }>`
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: var(--point-color-green);
  }
  color: ${(props) => (props?.active ? "#296a02" : "#2c2c2c")};
`;

export const MenuBtn = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  top: 130px;
  left: 20px;
  cursor: pointer;
  z-index: 20;
`;
