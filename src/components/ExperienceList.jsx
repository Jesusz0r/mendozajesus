import { css } from "@emotion/react";
import { bigScreen } from "../styles/breakpoints";

const experienceData = [
  {
    name: "Nuvocargo",
    location: "(Ciudad de México)",
    date: "Marzo 2022 - Actualidad",
    position: "Desarrollador front-end con React.",
    description: "",
    identifier: "one",
  },
  {},
  {},
  {
    name: "Credijusto",
    location: "(Ciudad de México)",
    date: "Octubre 2019 - Marzo 2022",
    position: "Desarrollador front-end con React.",
    description: "",
    identifier: "two",
  },
  {},
  {},
  {
    name: "Fintonic",
    location: "(Madrid)",
    date: "Abril 2018 - Agosto 2019",
    position: "Desarrollador full-stack con Node.js y React.",
    description: "",
    identifier: "three",
  },
  {},
  {},
  {
    name: "King Of App",
    location: "(Madrid)",
    date: "Enero 2017 - Abril 2018",
    position: "Desarrollador full-stack con Node.js y Angularjs.",
    description: "",
    identifier: "four",
  },
];

const ExperienceList = () => {
  return (
    <div
      className="experiencia-list"
      css={css`
        margin: 48px 0;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;

        ${bigScreen} {
          grid-template-columns: 1fr 0.25fr 1fr;
          grid-auto-rows: minmax(min-content, max-content);
          position: relative;
          justify-items: center;
        }
      `}
    >
      <div
        className="line"
        css={css`
          display: none;
          grid-row: 1 / 6;
          grid-column-start: 2;
          width: 2px;
          background-color: rgb(233, 33, 33);
          height: 100%;

          ${bigScreen} {
            display: block;
          }
        `}
      />
      {experienceData.map((experience, index) => {
        if (!experience.identifier) {
          return <div />;
        }

        return (
          <div
            key={experience.name}
            className="experiencia-item"
            css={css`
              background-color: #f9f9f9;
              display: block;
              padding: 12px 24px;
              border-radius: 8px;
              width: 100%;
              max-width: 350px;
              justify-self: center;
              position: relative;

              box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.35);

              ${bigScreen} {
                padding: 24px 48px;
                grid-column-start: ${index % 2 === 1 ? 3 : 1};

                &::before {
                  content: "";
                  height: 12px;
                  width: 12px;
                  background-color: rgb(233, 33, 33);
                  position: absolute;
                  top: calc(50% - 6px);
                  ${index % 2 === 0 ? "right: -26%;" : "left: -26%;"}
                  border-radius: 50%;
                }
              }
            `}
          >
            <h3>
              {experience.name}
              <br />
            </h3>
            <h4
              css={css`
                font-weight: 400;
                margin: 4px 0 16px 0;
              `}
            >
              {experience.date}
            </h4>
            <h5
              css={css`
                font-size: 14px;
                font-weight: 400;

                color: rgba(0, 0, 0, 0.5);
              `}
            >
              {experience.position}
            </h5>
            <p
              css={css`
                margin-top: 12px;
              `}
            >
              {experience.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceList;
