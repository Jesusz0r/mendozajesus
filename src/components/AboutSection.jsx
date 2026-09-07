import { useTranslation } from "react-i18next";
import SkillsList from "./SkillsList";

const AboutSection = ({ yearsOfExperience }) => {
  const { t } = useTranslation();
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="section about-section"
    >
      <header className="section-heading">
        <p className="eyebrow">{t("about.badge")}</p>
        <h2 id="about-title">
          {t("about.title")} <span>{t("about.titleHighlight")}</span>
        </h2>
        <div className="profile-stamp">
          <span className="profile-mark" aria-hidden="true">JM</span>
          <p>Jesús Mendoza<span>{t("about.role")}</span></p>
        </div>
      </header>
      <div className="about-body">
        <p className="large-copy">
          {t("about.bio")} <mark>{t("about.bioHighlight")}</mark>{" "}
          {t("about.bioContinue")}
        </p>
        <p>{t("about.subtitle", { years: yearsOfExperience })}</p>
        <div className="principles">
          {["clarity", "craft", "learning"].map((key) => (
            <div key={key}>
              <h3>{t(`about.principles.${key}.title`)}</h3>
              <p>{t(`about.principles.${key}.description`)}</p>
            </div>
          ))}
        </div>
        <p className="eyebrow">{t("about.techStack")}</p>
        <SkillsList />
      </div>
    </section>
  );
};
export default AboutSection;
