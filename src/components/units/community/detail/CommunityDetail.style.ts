import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  gap: 50px;
`;

export const BoardWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h3`
  font-size: var(--font-size-md);

  span {
    margin-right: 10px;
  }
`;

export const Contents = styled.div``;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Tag = styled.p`
  padding: 7px 15px;
  background-color: #e2b776;
  color: #fff;
  border-radius: 8px;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Nickname = styled.p`
  color: inherit;
`;
export const CreatedAt = styled.p`
  color: #a39f9f;
`;
export const View = styled.p`
  color: #a39f9f;
`;

export const Btn = styled.button`
  font-size: 16px;
  height: 48px;
  padding: 7px 15px;
  border-radius: 50px;
  color: #fff;
  background-color: var(--point-color-green);
  width: 130px;
`;
