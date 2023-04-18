import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --font-size-lg: 32px;
    --font-size-md: 20px;
    --font-size-sm: 14px;
    --main-bg-color: #f8f3eb;
    --sub-bg-color: #f0e9e0;
    --point-color-brown: #433b32;
    --point-color-green: #5f795a;
    --point-color-light-green: #296a02;
    --font-size-lg: 32px;
    --font-size-md: 20px;
    --font-size-sm: 14px;
    --base-font: "GowunDodum-Regular";
    --logo-font: "TAEBAEKmilkyway";
    --eng-font: "Poppins";
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: var(--base-font);
    overflow-x: hidden;
    color: #2c2c2c;
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

    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  }
`;
