import { Global, css } from "@emotion/react";
import { smallScreen } from "./breakpoints";

export default () => (
  <Global
    styles={css`
      @import "https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap";

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
      }

      html,
      body {
        font-size: 16px;
        background: rgb(245, 245, 245);
        height: 100%;
        min-height: 100%;
        color: rgb(33, 33, 33);
        position: relative;
      }

      h1 {
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 25px;
        font-weight: 400;

        ${smallScreen} {
          font-size: 2em;
        }
      }

      h2 {
        font-size: 1em;
        font-weight: 400;

        ${smallScreen} {
          font-size: 1.5em;
        }
      }

      p {
        color: rgb(114, 114, 114);
        font-size: 15px;
        line-height: 1.3;
        line-height: 22px;
        letter-spacing: -0.03px;
      }

      ul {
        list-style-type: none;
      }

      a,
      button {
        text-decoration: none;
        font-weight: 700;
        z-index: 1;
        cursor: pointer;
      }

      .container {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        padding: 50px 25px;
      }
    `}
  />
);
