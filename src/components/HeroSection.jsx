import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LiveProjects from "./LiveProjects";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" aria-labelledby="hero-title" className="hero">
      <div className="hero-inner">
        <div className="hero-kicker">
          <p>{t("hero.greeting")}</p>
          <span>{t("hero.since")}</span>
        </div>
        <div className="nameplate">
          <h1 id="hero-title"><span>Jesús</span> <span>Mendoza</span></h1>
          <ArrowDownRight className="nameplate-arrow" strokeWidth={1.1} aria-hidden="true" />
        </div>
        <div className="hero-summary">
          <p>{t("hero.statement")}</p>
          <span className="hero-route">
            Madrid <ArrowRight size={15} aria-hidden="true" /> {t("hero.location")}
          </span>
        </div>
        <LiveProjects />
        <div className="hero-bottom">
          <p>{t("hero.disciplines")}</p>
          <a className="text-link" href="#sobre-mi">
            {t("hero.explore")} <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
