import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --main-bg-color: #f8f3eb;
    --sub-bg-color: #f0e9e0;
    --point-color-brown: #433b32;
    --point-color-green: #5f795a;
    --font-size-lg: 32px;
    --font-size-md: 20px;
    --font-size-sm: 14px;
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
    /* font: "GowunDodum"; */
    font-family: "GowunDodum-Regular";
    overflow-x: hidden;
    background-color: #433b32;
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
`;
