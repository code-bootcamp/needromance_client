import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const ProfileWrap = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
`;

export const List = styled.li`
  height: 5rem;
  display: flex;
  align-items: center;

  position: relative;
`;

export const List_EN = styled(List)`
  font-family: var(--eng-font);
`;

export const Input = styled.input`
  width: 19rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: var(--btn-radius-sm);
  border: 1px solid #ccc;
  padding: 0.625rem;

  @media ${breakPoints.mobile} {
    width: 14rem;
  
`;

export const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  background: var(--point-color-light-green);

  font-size: 10px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 60px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 1.2rem;
`;
