import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  :root {
    --main-bg-color: #f8f3eb;
    --sub-bg-color: #f0e9e0;
    --point-color-beige: #cfbbae;
    --point-color-brown: #433b32;
    --point-color-green: #5f795a;
    --point-color-light-green: #296a02;
    --font-size-lg: 1.875rem;
    --font-size-md: 1.25rem;
    --font-size-sm: 0.875rem;
    --font-mobile-size-lg: 1.286rem;
    --font-mobile-size-md: 1.143rem;
    --font-mobile-size-sm: 0.714rem;
    --base-font: "GowunDodum-Regular";
    --logo-font: "TAEBAEKmilkyway";
    --eng-font: "Poppins";
    --btn-radius-lg: 3.125rem;
    --btn-radius-sm: 0.5rem;

    --btn-radius: 3.125rem;
    --btn-padding: 7px 15px;
    --btn-font-size: 0.875rem;
    --btn-width-md: 110px;
    --btn-width-lg: 312px;
    --btn-height: 40px;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    @media ${breakPoints.mobile} {
      font-size: 14px;
    }
    font-size: 16px;
  }

  body {
    font-family: var(--base-font);
    color: #2c2c2c;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }

  input,
  select,
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }
  button {
    cursor: pointer;
  }
  ol,
  li,
  ul {
    list-style: none;
  }

  a {
    text-decoration-line: none;
    color: var(--point-color-brown);
    &:hover {
      color: var(--point-color-brown);
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "GowunDodum-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  // 로고 폰트
  @font-face {
    font-family: "TAEBAEKmilkyway";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/TAEBAEKmilkyway.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;

    // 영어 폰트
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  }
`;
