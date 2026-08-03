import { ArrowUp, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 noise"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full border border-accent/10"
      />

      <div className="container relative z-10 mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              Jesús Mendoza / field notes
            </p>
            <h2 className="mt-5 max-w-3xl font-sans text-4xl font-extrabold leading-[0.92] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              {t("footer.tagline")}
            </h2>
          </div>
          <SocialLinks />
        </div>

        <div className="flex flex-col gap-5 pt-8 font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Code2 size={14} strokeWidth={1.6} className="text-accent" aria-hidden="true" />
            {t("footer.madeWith")} {t("footer.by")}
          </p>
          <div className="flex items-center gap-5">
            <p>&copy; {new Date().getFullYear()} · {t("footer.rights")}</p>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              {t("footer.backToTop")}
              <ArrowUp
                size={13}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
