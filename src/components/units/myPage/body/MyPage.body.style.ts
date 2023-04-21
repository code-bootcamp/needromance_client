import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 3.125rem;
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    padding: 2rem;
  }
`;

export const MyPageTitle = styled.h1`
  font-size: var(--font-size-md);
  margin-bottom: 0.9rem;

  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-md);
  }
`;
