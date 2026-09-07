import { useTranslation } from "react-i18next";

const experiences = [
  {
    name: "King Of App",
    translationKey: "kingofapp",
    tags: ["AngularJS", "Node.js", "Firebase", "Ionic"],
  },
  {
    name: "Fintonic",
    translationKey: "fintonic",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Credijusto",
    translationKey: "credijusto",
    tags: ["React", "JavaScript", "Redux", "REST APIs"],
  },
  {
    name: "Nuvocargo",
    translationKey: "nuvocargo",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    isCurrent: true,
  },
];

const ExperienceList = () => {
  const { t } = useTranslation();
  return (
    <ol className="experience-list">
      {experiences.map((experience) => {
        const key = `experience.jobs.${experience.translationKey}`;
        return (
          <li key={experience.name} className={experience.isCurrent ? "is-current" : undefined}>
            <p className="job-date">{t(`${key}.date`)}</p>
            <span className="job-junction" aria-hidden="true" />
            <article>
              <div className="job-heading">
                <h3>{experience.name}</h3>
                {experience.isCurrent && (
                  <span className="current-label">
                    {t("experience.current")}
                  </span>
                )}
              </div>
              <p className="job-role">
                {t(`${key}.position`)} · {t(`${key}.location`)}
              </p>
              <p>{t(`${key}.description`)}</p>
              <ul className="job-tags">
                {experience.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ol>
  );
};
export default ExperienceList;
