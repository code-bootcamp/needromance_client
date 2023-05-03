import styled from "@emotion/styled";
import { PushpinFilled, StarFilled, TrophyFilled } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PickedBox = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Picked = styled(TrophyFilled)`
  color: #e2b776;
  margin-right: 4px;
`;

export const PickedLabel = styled.p`
  background-color: var(--point-color-green);
  padding: 7px 15px 5px 15px;
  border-radius: 4px 4px 0 0;
  margin-left: 20px;
  color: #fff;
`;

export const CardWrap = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 530px;
  padding: 1.25rem 1.875rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  margin-top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  @media ${breakPoints.mobile} {
    min-height: 350px;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const LeftWrap = styled.div`
  padding: 0 1.875rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const RigthWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 1.875rem;
  border-left: 1px solid #eee;
`;

export const NameTo = styled.p`
  font-size: var(--font-size-md);

  span {
    margin-right: 0.3rem;
  }
`;

export const StampWrap = styled.div`
  margin-bottom: 10px;
  /* background-image: url("/img/community/stamp.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end; */
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 8em;
  height: 9rem;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media ${breakPoints.mobile} {
    width: 4rem;
    height: 5rem;
  }

  @media ${breakPoints.tablet} {
    width: 4rem;
    height: 5rem;
  }
`;

export const SealImg = styled.img`
  width: 7rem;
  opacity: cover;

  position: absolute;
  bottom: -8px;
  right: 3px;

  @media ${breakPoints.mobile} {
    width: 3.75rem;
  }

  @media ${breakPoints.tablet} {
    width: 3.75rem;
  }
`;

export const Nickname = styled.p`
  color: inherit;
  font-size: var(--font-mobile-size-sm);
`;

export const UserGrade = styled.p`
  color: inherit;
  font-size: var(--font-mobile-size-sm);
`;

export const Contents = styled.div`
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }

  @media ${breakPoints.tablet} {
    font-size: var(--font-mobile-sm);
  }
`;

export const CreatedAt = styled.p`
  color: inherit;
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }
`;

export const LikeCount = styled.p`
  color: #a39f9f;
  font-size: var(--font-mobile-size-sm);

  span {
    display: inline-block;
    margin-right: 0.1rem;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
`;
