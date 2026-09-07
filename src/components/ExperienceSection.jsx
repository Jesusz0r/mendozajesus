import { useTranslation } from "react-i18next";
import ExperienceList from "./ExperienceList";
const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="section experience-section"
    >
      <header className="section-heading section-heading-wide">
        <div>
          <p className="eyebrow">{t("experience.badge")}</p>
          <h2 id="experience-title">
            {t("experience.title")} <span>{t("experience.titleHighlight")}</span>
          </h2>
        </div>
        <p>{t("experience.subtitle")}</p>
      </header>
      <ExperienceList />
    </section>
  );
};
export default ExperienceSection;
