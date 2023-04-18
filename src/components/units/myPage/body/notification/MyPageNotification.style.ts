import styled from "@emotion/styled";

export const NotificationCard = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--point-color-light-green);
  color: #fff;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 16px;
  span {
    font-size: var(--font-size-sm);
    color: #a39f9f;
    margin-left: 10px;
  }
`;

export const Content = styled.p`
  font-size: var(--font-size-sm);
  margin-top: 10px;
`;

export const DeleteWrap = styled.div`
  cursor: pointer;
  color: var(--point-color-brown);

  &:hover {
    color: var(--point-color-green);
  }
`;
