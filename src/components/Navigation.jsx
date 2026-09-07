import { useTranslation } from "react-i18next";

const navigationItems = [
  { href: "#projects", labelKey: "navigation.projects" },
  { href: "#sobre-mi", labelKey: "navigation.about" },
  { href: "#books", labelKey: "navigation.books" },
  { href: "#experiencia", labelKey: "navigation.experience" },
];

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const nextLang = currentLang === "es" ? "en" : "es";
  const nextPath = `/${nextLang}`;

  const handleLanguageChange = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    window.history.pushState(
      {},
      "",
      `${nextPath}${window.location.search}${window.location.hash}`,
    );
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav aria-label={t("navigation.label")} className="navigation">
      <a href="#home" className="wordmark">
        <span className="wordmark-symbol" aria-hidden="true">JM</span>
        <span className="wordmark-caption">
          Jesús Mendoza
          <span>{t("navigation.practice")}</span>
        </span>
      </a>
      <div className="nav-links">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {t(item.labelKey)}
          </a>
        ))}
      </div>
      <a
        className="language-switch"
        href={nextPath}
        onClick={handleLanguageChange}
        aria-label={t("language.switchLabel")}
        hrefLang={nextLang}
        lang={nextLang}
      >
        <span className="language-current" aria-hidden="true">
          {currentLang.toUpperCase()}
        </span>
        <span className="language-divider" aria-hidden="true">/</span>
        {t("language.switch")}
      </a>
    </nav>
  );
};
export default Navigation;
