import { css } from "@emotion/react";
import Typist from "react-text-typist";

// Components
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import SkillList from "../components/SkillsList";
import ExperienceList from "../components/ExperienceList";

import WebsiteImage from "../assets/img/responsive-website-design.png";

import {
  smallScreen,
  mediumScreen,
  bigScreen,
  ultraBigScreen,
} from "../styles/breakpoints";

const HomePage = () => {
  return (
    <Layout>
      <section
        id="home"
        css={css`
          min-height: 100%;
          width: 100%;
          position: relative;
          background: rgb(33, 33, 33);
          background-size: cover;
          text-align: center;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          padding-top: 10%;

          ${mediumScreen} {
            padding-top: 5%;
          }

          ${bigScreen} {
            min-height: 75%;
          }

          ul a {
            margin: 10px;
          }
        `}
      >
        <div
          className="container"
          css={css`
            color: rgb(230, 230, 230);
            width: 100%;
            max-width: 960px;
            align-self: center;
            padding-top: 50px;
            margin-bottom: 50px;

            ${mediumScreen} {
              margin-top: auto;
            }
          `}
        >
          <h1
            css={css`
              font-weight: 700;
              font-size: 2.5em;

              ${smallScreen} {
                font-size: 3em;
              }

              ${ultraBigScreen} {
                font-size: 4em;
              }
            `}
          >
            Jesús Mendoza.
            <br />
            <Typist
              css={css`
                font-weight: 300;
              `}
              sentences={[
                "Me dedico al desarrollo de páginas y aplicaciones web",
              ]}
              typingSpeed={100}
              loop={false}
            />
          </h1>
          <SocialLinks />
        </div>

        <div
          className="homeimage"
          css={css`
            margin-top: auto;
            height: 220px;
            width: 100%;
            background-image: url(${WebsiteImage});
            background-position: center;
            background-repeat: no-repeat;
            background-size: auto;
            display: none;

            ${mediumScreen} {
              display: inline-block;
            }
          `}
        />
      </section>

      <section
        id="tecnologias"
        css={css`
          background-color: #f9f9f9;
        `}
      >
        <div className="container">
          <h1>Sobre mí</h1>
          <p>
            Soy una persona un poco introvertida al principio pero luego me
            vuelvo una persona que expresa sus ideas y opiniones con seguridad,
            a la que le gusta participar en temas relacionados con la empresa, a
            la que le gusta el buen ambiente laboral y a la que le gusta de
            forma equitativa enseñar y aprender cosas nuevas cada día.
          </p>
          <br></br>
          <p>
            Me gusta mucho aprender así que siempre estoy aprendiendo cosas
            nuevas, actualmente tengo conocimiento en las siguientes
            tecnologías:
          </p>
          <SkillList />
        </div>
      </section>

      <section id="experiencia">
        <div className="container">
          <h1>Experiencia Laboral</h1>

          <ExperienceList />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
