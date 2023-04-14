import { css } from "@emotion/react";

export const globalStyles = css`
  /* @font-face {
    font-family: ;
    src: url();
  } */
  :root {
    --main-bg-color: red;
    --sub-bg-color: blue;
    --font-size-lg: 32px;
    --font-size-md: 20px;
    --font-size-sm: 14px;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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
