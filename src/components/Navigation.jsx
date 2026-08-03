import { useTranslation } from "react-i18next";

const navigationItems = [
  { href: "#sobre-mi", labelKey: "navigation.about" },
  { href: "#projects", labelKey: "navigation.projects" },
  { href: "#books", labelKey: "navigation.books" },
  { href: "#experiencia", labelKey: "navigation.experience" },
];

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const nextLang = currentLang === "es" ? "en" : "es";
  const nextPath = `/${nextLang}`;

  const handleLanguageChange = (event) => {
    event.preventDefault();
    i18n.changeLanguage(nextLang);
    window.history.pushState({}, "", nextPath);
  };

  return (
    <nav
      aria-label={t("navigation.label")}
      className="fixed left-0 top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="font-mono text-xs font-medium tracking-[0.18em] text-foreground transition-colors hover:text-accent"
          aria-label="Jesús Mendoza"
        >
          JM
        </a>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>

          <a
            href={nextPath}
            onClick={handleLanguageChange}
            aria-label={t("language.switchLabel")}
            className="ml-4 border border-border bg-secondary px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t("language.switch")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
