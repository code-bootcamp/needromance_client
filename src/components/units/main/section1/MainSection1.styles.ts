import styled from "@emotion/styled";

import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Slide = styled.div`
  height: auto;
  width: 100%;
`;

export const ImagesWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  @media ${breakPoints.mobile} {
    gap: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    border: solid #fff;
    border-width: 6px 6px 20px 6px;
    box-shadow: 1px 1px 5px #333;
    -webkit-box-shadow: 1px 1px 5px #333;
    -moz-box-shadow: 1px 1px 5px #333;
    /* border: 1px solid black; */
    @media ${breakPoints.mobile} {
      border-width: 4px 4px 5px 4px;
    }
  }
`;
