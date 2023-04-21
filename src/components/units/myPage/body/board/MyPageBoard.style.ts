import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Table = styled.table`
  width: 100%;
  margin-top: 2rem;

  text-align: left;
  border-radius: 2px 2px 0 0;
  border-collapse: separate;
  border-spacing: 0;
`;

export const TR = styled.tr``;

export const Thead = styled.thead`
  vertical-align: middle;
  font-size: var(--font-size-sm);
  background: #fafafa;
  transition: background 0.3s ease;

  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }
`;

export const TH = styled.th`
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;

  :first-child {
    ::before {
      border: none;
    }
  }

  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 0.625rem;
    border-left: 1px solid #f0f0f0;
  }

  @media ${breakPoints.mobile} {
    padding: 0.5rem;
  }
`;

export const Tbody = styled.tbody`
  vertical-align: middle;
  font-size: var(--font-size-sm);

  @media ${breakPoints.mobile} {
    font-size: var(--font-mobile-size-sm);
  }
`;

export const TD = styled.td`
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem;
`;

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;

export const IconBox = styled.div`
  cursor: pointer;
  &:hover {
    color: var(--point-color-light-green);
  }
`;
