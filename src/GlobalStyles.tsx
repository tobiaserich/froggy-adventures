import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 18px;
          margin: 0;
          height: 100vh;
          width: 100vw;
          font-family: "Open Sans", sans-serif;
        }
        #root {
          margin: auto;
          height: 100%;
        }
      `}
    />
  );
}

export default GlobalStyles;
