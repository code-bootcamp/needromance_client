import styled from "@emotion/styled";

export const NavWrap = styled.nav`
  background: #fff;
  height: 100%;
  border-right: 1px solid #eee;

  @media (max-width: 768px) {
    display: ${(props) => (props.openNav ? "block" : "none")};
    background: #fff;
    height: 100%;
    border-right: 1px solid #eee;

    position: absolute;
    left: 0;
    z-index: 10;
  }
`;

export const MenuBtn = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  top: 116px;
  left: 20px;
  cursor: pointer;
  z-index: 20;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Nickname = styled.p``;

export const Line = styled.hr`
  width: 100%;
  border-top: 1px solid #eee;
`;

export const ListsWrap = styled.ul`
  padding: 80px 50px;
`;

export const List = styled.li`
  width: 100px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Name = styled.span<{ active: boolean }>`
  cursor: pointer;
  &:hover {
    color: var(--point-color-green);
  }
  color: ${(props) => (props?.active ? "#296a02" : "#2c2c2c")};
`;
