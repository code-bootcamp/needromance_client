import styled from "@emotion/styled";
import { PushpinFilled, StarFilled, TrophyFilled } from "@ant-design/icons";

export const CommentWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  border-top: ${(props) => props.picked && "5px solid  #e2b776"};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TopWrap = styled.div``;

export const Picked = styled(TrophyFilled)`
  color: #e2b776;
`;
export const InfoWrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Nickname = styled.p``;

export const UserGrade = styled.p``;

export const LikeBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--point-color-green);
  height: 48px;
  width: 48px;
  color: #fff;

  font-size: 16px;
  padding: 7px 15px;
  border-radius: 50%;
  font-size: var(--font-size-sm);
`;

export const LikeCount = styled.p`
  color: inherit;
`;

export const Contents = styled.div``;

export const CreatedAt = styled.p`
  color: #a39f9f;
  font-size: var(--font-size-sm);
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3px;
`;

export const Btn_line = styled.button`
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 50px;
  font-size: var(--font-size-sm);
  border: 1px solid var(--point-color-green);
  color: var(--point-color-green);
`;
