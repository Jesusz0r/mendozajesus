import { CalendarDays, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    name: "Nuvocargo",
    translationKey: "nuvocargo",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    isCurrent: true,
  },
  {
    name: "Credijusto",
    translationKey: "credijusto",
    tags: ["React", "JavaScript", "Redux", "REST APIs"],
  },
  {
    name: "Fintonic",
    translationKey: "fintonic",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "King Of App",
    translationKey: "kingofapp",
    tags: ["AngularJS", "Node.js", "Firebase", "Ionic"],
  },
];

const formatIndex = (index) => String(index + 1).padStart(2, "0");

const ExperienceList = () => {
  const { t } = useTranslation();

  return (
    <ol className="mt-16">
      {experiences.map((experience, index) => {
        const jobKey = `experience.jobs.${experience.translationKey}`;

        return (
          <li
            key={experience.name}
            className="group relative border-b border-border py-10 pl-10 sm:py-12 lg:pl-16"
          >
            <span className="absolute left-0 top-12 flex h-6 w-6 items-center justify-center border border-border bg-secondary font-mono text-[10px] font-medium text-accent lg:top-14">
              {formatIndex(index)}
            </span>

            <div className="grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
              <div className="lg:border-r lg:border-border lg:pr-8">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {t(`${jobKey}.date`)}
                </p>
                <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
                  {t(`${jobKey}.duration`)}
                </p>
              </div>

              <article className="relative border border-border bg-secondary p-6 transition-colors duration-300 hover:bg-background sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transform-none"
                />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-sans text-3xl font-bold leading-none tracking-[-0.04em] text-foreground sm:text-4xl">
                        {experience.name}
                      </h3>
                      {experience.isCurrent ? (
                        <span className="border border-accent px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-accent">
                          {t("experience.current")}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 font-serif text-lg text-foreground">
                      {t(`${jobKey}.position`)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-y border-border py-4 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} strokeWidth={1.7} className="text-accent" aria-hidden="true" />
                    {t(`${jobKey}.location`)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} strokeWidth={1.7} className="text-accent" aria-hidden="true" />
                    {t(`${jobKey}.date`)}
                  </span>
                </div>

                <p className="mt-6 max-w-3xl font-serif leading-relaxed text-muted-foreground">
                  {t(`${jobKey}.description`)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-background px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ExperienceList;
