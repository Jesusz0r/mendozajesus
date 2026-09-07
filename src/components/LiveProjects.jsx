import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Building2,
  CircuitBoard,
  GitFork,
  HeartPulse,
  MessagesSquare,
  PanelsTopLeft,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const productionProjects = [
  {
    id: "citationPath",
    name: "Citation Path",
    url: "https://citationpath.com",
    domain: "citationpath.com",
    icon: GitFork,
    x: 21,
    y: 20,
  },
  {
    id: "baiivo",
    name: "Baiivo",
    url: "https://baiivo.com",
    domain: "baiivo.com",
    icon: PanelsTopLeft,
    x: 79,
    y: 20,
  },
  {
    id: "crematic",
    name: "CREmatic",
    url: "https://crematic.app",
    domain: "crematic.app",
    icon: Building2,
    x: 21,
    y: 50,
  },
  {
    id: "onLeads",
    name: "OnLeads",
    url: "https://onleads.chat",
    domain: "onleads.chat",
    icon: MessagesSquare,
    x: 79,
    y: 50,
  },
  {
    id: "voztro",
    name: "Voztro",
    url: "https://voztro.com",
    domain: "voztro.com",
    icon: AudioLines,
    x: 21,
    y: 80,
  },
  {
    id: "moodMentor",
    name: "MoodMentor",
    url: "https://moodmentor.app",
    domain: "moodmentor.app",
    icon: HeartPulse,
    x: 79,
    y: 80,
  },
];

const LiveProjects = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(productionProjects[0].id);
  const selected = productionProjects.find((project) => project.id === selectedId);
  const SelectedIcon = selected.icon;

  return (
    <section id="projects" aria-labelledby="projects-title" className="workbench">
      <header className="workbench-toolbar">
        <div>
          <CircuitBoard size={18} aria-hidden="true" />
          <h2 id="projects-title">{t("projects.title")}</h2>
        </div>
        <p>{t("projects.count", { count: productionProjects.length })}</p>
      </header>
      <div className="workbench-body">
        <div className="map-surface">
          <div className="map-heading">
            <p className="eyebrow">{t("projects.eyebrow")}</p>
            <ArrowDownRight size={20} aria-hidden="true" />
          </div>
          <fieldset className="project-map" aria-describedby="project-map-hint">
            <legend className="sr-only">{t("projects.select")}</legend>
            <svg className="connection-map" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              {productionProjects.map((project) => (
                <path
                  key={project.id}
                  d={`M500 250 H${project.x < 50 ? 405 : 595} V${project.y * 5} H${project.x * 10}`}
                  className={selectedId === project.id ? "circuit-trace is-selected" : "circuit-trace"}
                  pathLength="1"
                />
              ))}
            </svg>
            <div className="processor" aria-hidden="true">
              <span className="processor-caption">{t("projects.builtBy")}</span>
              <span className="processor-mark">JM</span>
              <span className="processor-caption">Jesús Mendoza</span>
            </div>
            {productionProjects.map(({ id, name, domain, icon: Icon, x, y }) => (
              <label
                key={id}
                className="project-node"
                style={{ "--node-x": `${x}%`, "--node-y": `${y}%` }}
              >
                <input
                  type="radio"
                  name="project"
                  value={id}
                  checked={selectedId === id}
                  onChange={() => setSelectedId(id)}
                  aria-label={t("projects.inspect", { project: name })}
                  aria-controls="project-inspector"
                />
                <span className="node-face">
                  <span className="node-topline">
                    <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                    <span className="node-contact" aria-hidden="true" />
                  </span>
                  <span className="node-name">{name}</span>
                  <span className="node-domain">{domain}</span>
                </span>
              </label>
            ))}
          </fieldset>
          <p id="project-map-hint" className="map-hint">
            <span aria-hidden="true">↳</span> {t("projects.select")}
          </p>
          <a className="text-link inspector-jump" href="#project-inspector">
            {t("projects.viewDetails", { project: selected.name })}
            <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </div>
        <aside id="project-inspector" className="project-inspector" aria-label={t("projects.inspector")} tabIndex={-1}>
          <div className="inspector-topline">
            <p>{t("projects.inspector")}</p>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="inspector-detail" aria-live="polite" aria-atomic="true">
            <div className="inspector-symbol" aria-hidden="true">
              <SelectedIcon size={54} strokeWidth={1.1} />
            </div>
            <p className="eyebrow">{t(`projects.items.${selected.id}.category`)}</p>
            <h3>{selected.name}</h3>
            <p className="project-description">{t(`projects.items.${selected.id}.description`)}</p>
            <p className="inspector-domain">{selected.domain}</p>
          </div>
          <a className="action-link" href={selected.url} target="_blank" rel="noreferrer">
            {t("projects.visit", { project: selected.name })}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </aside>
      </div>
      <div className="workbench-footnote">
        <span>{t("projects.intro")}</span>
        <span aria-hidden="true" className="registration-mark">+</span>
      </div>
    </section>
  );
};

export default LiveProjects;
