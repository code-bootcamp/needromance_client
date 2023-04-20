import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const NotificationCard = styled.div`
  border: 1px solid #eee;
  border-radius: var(--btn-radius-sm);
  width: 100%;
  padding: 1.25rem;
  margin-bottom: 0.625rem;

  display: flex;
  flex-direction: row;
  gap: 0.625rem;

  @media ${breakPoints.mobile} {
    padding: 0.8rem;
  }
`;

export const IconWrap = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--point-color-light-green);
  font-size: 0.7rem;
  color: #fff;
  @media ${breakPoints.mobile} {
    width: 20px;
    height: 18px;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1rem;

  span {
    font-size: var(--font-size-sm);
    color: #a39f9f;
    margin-left: 0.625rem;

    @media ${breakPoints.mobile} {
      font-size: var(--font-mobile-size-sm);
    }
  }
`;

export const Content = styled.p`
  font-size: var(--font-size-sm);
  margin-top: 0.625rem;

  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
    margin-top: 0.5rem;
  }
`;

export const DeleteWrap = styled.div`
  cursor: pointer;
  color: var(--point-color-brown);

  &:hover {
    color: var(--point-color-green);
  }
`;
