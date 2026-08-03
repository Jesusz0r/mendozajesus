import { ArrowDown, Braces } from "lucide-react";
import { useTranslation } from "react-i18next";

import SocialLinks from "./SocialLinks";

const technologies = ["React", "TypeScript", "Node.js", "Tailwind CSS"];

const HeroSection = ({ yearsOfExperience }) => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen items-end overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 noise"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 top-32 h-[26rem] w-[26rem] rounded-full border border-accent/25"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-[42rem] w-[42rem] rounded-full border border-muted-foreground/15"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[10%] h-56 w-px bg-gradient-to-b from-transparent to-accent"
      />
      <div
        aria-hidden="true"
        className="absolute right-[18%] top-0 h-40 w-px bg-gradient-to-b from-accent to-transparent"
      />

      <div className="container relative z-10 mx-auto w-full max-w-[1320px] px-6 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("hero.greeting")}
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl font-sans text-[clamp(3.5rem,12vw,10rem)] font-extrabold leading-[0.82] tracking-[-0.06em] text-balance"
            >
              Jesús
              <br />
              <span className="text-accent">Mendoza.</span>
            </h1>

            <div className="mt-10 flex max-w-xl items-start gap-4 border-l-2 border-accent pl-5">
              <Braces
                size={22}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-accent"
                aria-hidden="true"
              />
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                {t("hero.intro")}
              </p>
            </div>
            <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {t("hero.statement")}
            </p>

            <div className="mt-10">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {t("hero.stackLabel")}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <SocialLinks className="mt-10" />
          </div>

          <aside className="relative flex flex-col justify-between border border-border bg-card p-6 shadow-[16px_16px_0_rgba(255,75,47,0.12)] sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-accent/40" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-r border-t border-accent/40" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              {t("hero.noteLabel")}
            </span>
            <blockquote className="mt-12 font-serif text-2xl leading-[1.2] tracking-[-0.02em] text-card-foreground sm:text-3xl lg:text-4xl">
              “{t("hero.note")}”
            </blockquote>
            <div className="mt-12 border-t border-border pt-5 font-mono text-[10px] leading-relaxed tracking-[0.12em] text-muted-foreground">
              <p>{t("hero.codeComment1", { years: yearsOfExperience })}</p>
              <p className="mt-1">{t("hero.codeComment2")}</p>
            </div>
          </aside>
        </div>

        <a
          href="#sobre-mi"
          className="group mt-20 inline-flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("hero.explore")}
          <span className="flex h-9 w-9 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:text-accent">
            <ArrowDown size={15} strokeWidth={1.7} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
