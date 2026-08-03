
import { useTranslation } from "react-i18next";

import ExperienceList from "./ExperienceList";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 noise"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-32 h-[34rem] w-[34rem] rounded-full border border-accent/10"
      />
      <div
        aria-hidden="true"
        className="absolute right-4 top-8 font-sans text-[16rem] font-extrabold leading-none text-foreground/[0.03] sm:text-[24rem]"
      >
        05
      </div>

      <div className="container relative z-10 mx-auto max-w-[1320px] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <header className="grid gap-10 border-b border-border pb-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              {t("experience.badge")}
            </div>
            <h2
              id="experience-title"
              className="max-w-4xl font-sans text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl"
            >
              {t("experience.title")}{" "}
              <span className="text-accent">{t("experience.titleHighlight")}</span>
            </h2>
          </div>
          <p className="border-l-2 border-accent pl-5 font-serif text-lg leading-relaxed text-muted-foreground">
            {t("experience.subtitle")}
          </p>
        </header>

        <ExperienceList />
      </div>
    </section>
  );
};

export default ExperienceSection;
