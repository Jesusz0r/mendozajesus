import { css } from "@emotion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faGitAlt,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { mediumScreen } from "../styles/breakpoints";

const SkillList = () => {
  return (
    <div
      className="skills"
      css={css`
        margin-top: 50px;
      `}
    >
      <div
        className="skills-list"
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          justify-items: center;
          ${mediumScreen} {
            grid-template-columns: repeat(auto-fill, 1fr);
          }
          svg {
            max-width: 50px;
          }
          p {
            font-size: 0.9em;
            display: grid;
            justify-items: center;
            padding: 10px;
            i {
              font-size: 4em;
            }
          }
        `}
      >
        <p>
          <FontAwesomeIcon icon={faHtml5} size="5x" /> HTML5
        </p>
        <p>
          <FontAwesomeIcon icon={faCss3Alt} size="5x" /> CSS3
        </p>
        <p>
          <FontAwesomeIcon icon={faJs} size="5x" /> JavaScript
        </p>
        <p>
          <FontAwesomeIcon icon={faNodeJs} size="5x" /> Node.js
        </p>
        <p>
          <FontAwesomeIcon icon={faDatabase} size="5x" /> MongoDB
        </p>
        <p>
          <FontAwesomeIcon icon={faReact} size="5x" /> React
        </p>
        <p>
          <FontAwesomeIcon icon={faGitAlt} size="5x" /> Git
        </p>
        <p>
          <FontAwesomeIcon icon={faAws} size="5x" /> AWS
        </p>
      </div>
    </div>
  );
};

export default SkillList;
