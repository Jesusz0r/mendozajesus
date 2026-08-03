import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const productionProjects = [
  {
    id: "citationPath",
    name: "Citation Path",
    url: "https://citationpath.com",
    domain: "citationpath.com",
  },
  {
    id: "baiivo",
    name: "Baiivo",
    url: "https://baiivo.com",
    domain: "baiivo.com",
  },
  {
    id: "crematic",
    name: "CREmatic",
    url: "https://crematic.app",
    domain: "crematic.app",
  },
  {
    id: "onLeads",
    name: "OnLeads",
    url: "https://onleads.chat",
    domain: "onleads.chat",
  },
  {
    id: "voztro",
    name: "Voztro",
    url: "https://voztro.com",
    domain: "voztro.com",
  },
  {
    id: "moodMentor",
    name: "MoodMentor",
    url: "https://moodmentor.app",
    domain: "moodmentor.app",
  },
];

const formatIndex = (index) => String(index + 1).padStart(2, "0");

const LiveProjects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
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
        className="absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full border border-muted-foreground/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-20 h-[36rem] w-[36rem] rounded-full border border-accent/10"
      />

      <div className="container relative z-10 mx-auto max-w-[1320px] px-6 py-28 sm:px-8 sm:py-36 lg:px-10">
        <header className="grid gap-10 border-b border-border pb-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              {t("projects.eyebrow")}
            </div>
            <h2
              id="projects-title"
              className="max-w-4xl font-sans text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl"
            >
              {t("projects.title")}{" "}
              <span className="text-accent">{t("projects.titleHighlight")}</span>
            </h2>
          </div>
          <div className="border-l-2 border-accent pl-5">
            <p className="font-serif text-lg leading-relaxed text-muted-foreground">
              {t("projects.intro")}
            </p>
            <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              {t("projects.count", { count: productionProjects.length })}
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {productionProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={t("projects.visit", { project: project.name })}
              className="group relative flex min-h-[22rem] flex-col overflow-hidden bg-secondary p-7 transition-colors duration-300 hover:bg-background sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transform-none"
              />
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                <span className="text-accent">{formatIndex(index)}</span>
                <span className="inline-flex items-center gap-2 border border-border px-2 py-1 text-foreground">
                  <span className="relative h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {t("projects.status")}
                </span>
              </div>

              <div className="mt-auto pt-20">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {t(`projects.items.${project.id}.category`)}
                </p>
                <h3 className="mt-3 font-sans text-3xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 font-serif leading-relaxed text-muted-foreground">
                  {t(`projects.items.${project.id}.description`)}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                <span className="truncate">{project.domain}</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;
