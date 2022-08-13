import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <ul
      className="social"
      css={css`
        margin: 10px 0;

        li {
          display: inline-block;

          a {
            color: rgb(230, 230, 230);
          }
        }
      `}
    >
      <li>
        <a
          href="http://github.com/Jesusz0r"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </li>
      <li>
        <a
          href="https://es.linkedin.com/in/jesusreveron"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
