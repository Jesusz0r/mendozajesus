import { css } from "@emotion/react";

// Components
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer
      css={css`
        margin-top: auto;
        width: 100%;
        background: rgb(33, 33, 33);
        padding: 1em;
      `}
    >
      <div className="container">
        <div
          id="menusfooter"
          css={css`
            border-bottom: 1px solid rgb(103, 103, 103);
            display: grid;

            ul a {
              padding: 0;
              color: rgb(230, 230, 230);
              font-weight: 700;
              font-size: 12px;
              text-transform: uppercase;
              margin: 10px;
            }
          `}
        >
          <SocialLinks />
        </div>

        <div
          id="lastmenufooter"
          css={css`
            margin-top: 0.5em;
            color: rgb(154, 154, 154);
          `}
        >
          Jesús Mendoza.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
