import styled from "@emotion/styled";

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  margin-top: 50px;
`;

export const Thead = styled.thead``;

export const TH = styled.th`
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #f0e9e0;
  padding: 10px;
`;

export const Tbody = styled.tbody`
  border-top: 1px solid #000;
  text-align: center;
`;

export const TD = styled.td`
  border-bottom: 1px solid #f0e9e0;
  padding: 10px;
`;

export const TR = styled.tr``;

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconBox = styled.div`
  cursor: pointer;
  &:hover {
    color: var(--point-color-light-green);
  }
`;
