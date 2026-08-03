import { Code2, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

import SkillsList from "./SkillsList";

const principleKeys = ["clarity", "craft", "learning"];

const AboutSection = ({ yearsOfExperience }) => {
  const { t } = useTranslation();

  const stats = [
    { value: `${yearsOfExperience}+`, label: t("about.stats.years") },
    { value: "4", label: t("about.stats.companies") },
  ];

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-secondary text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 noise opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full border border-accent/10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[12%] h-56 w-px bg-gradient-to-b from-transparent to-accent"
      />

      <div className="container relative z-10 mx-auto max-w-[1320px] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <header className="grid gap-10 border-b border-border pb-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              <span className="h-2 w-2 bg-accent" />
              {t("about.badge")}
            </div>
            <h2
              id="about-title"
              className="max-w-4xl font-sans text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl"
            >
              {t("about.title")}{" "}
              <span className="text-muted-foreground">{t("about.titleHighlight")}</span>
            </h2>
          </div>
          <p className="border-l-2 border-accent pl-5 font-serif text-lg leading-relaxed text-muted-foreground">
            {t("about.subtitle", { years: yearsOfExperience })}
          </p>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <article className="relative border border-border bg-background p-8 shadow-[12px_12px_0_rgba(255,75,47,0.1)] sm:p-10 lg:p-12">
            <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
            <Quote
              size={56}
              strokeWidth={1.2}
              className="absolute right-8 top-8 text-accent/20"
              aria-hidden="true"
            />
            <p className="max-w-2xl font-serif text-2xl leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
              {t("about.bio")}{" "}
              <span className="text-accent">{t("about.bioHighlight")}</span>{" "}
              {t("about.bioContinue")}
            </p>
            <div className="mt-12 flex items-center gap-3 border-t border-border pt-5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              <Code2 size={15} strokeWidth={1.6} aria-hidden="true" className="text-accent" />
              {t("about.noteLabel")}
            </div>
          </article>

          <div className="space-y-8">
            <dl className="grid grid-cols-2 gap-px border border-border bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-secondary p-6 sm:p-8">
                  <dd className="font-sans text-5xl font-extrabold tracking-[-0.05em] text-foreground sm:text-6xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="border border-border bg-background p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 bg-accent" />
                <span className="h-2 w-2 bg-muted-foreground" />
                <span className="h-2 w-2 bg-border" />
              </div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {t("about.codeComment")}
              </p>
              <div className="mt-4 space-y-1 font-mono text-sm leading-relaxed">
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-foreground">standard</span> = [
                </p>
                <p className="pl-4 text-muted-foreground">"clarity",</p>
                <p className="pl-4 text-muted-foreground">"care",</p>
                <p className="pl-4 text-muted-foreground">"craft"</p>
                <p>];</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                {t("about.techStack")}
              </div>
              <h3 className="mt-3 font-sans text-4xl font-extrabold leading-none tracking-[-0.04em] sm:text-5xl">
                {t("about.principles.title")}
              </h3>
            </div>
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
              {t("about.techStackSubtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {principleKeys.map((key, index) => (
              <article key={key} className="bg-secondary p-6 transition-colors hover:bg-background sm:p-8">
                <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-accent">
                  0{index + 1}
                </span>
                <h4 className="mt-4 font-sans text-2xl font-bold tracking-[-0.03em] text-foreground">
                  {t(`about.principles.${key}.title`)}
                </h4>
                <p className="mt-3 font-serif leading-relaxed text-muted-foreground">
                  {t(`about.principles.${key}.description`)}
                </p>
              </article>
            ))}
          </div>

          <SkillsList />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
