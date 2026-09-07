import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="eyebrow">{t("footer.eyebrow")}</p>
          <h2>
            {t("footer.title")} <span>{t("footer.titleHighlight")}</span>
          </h2>
        </div>
        <div className="footer-contact">
          <p className="footer-intro">{t("footer.intro")}</p>
          <SocialLinks />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jesús Mendoza</p>
        <p className="footer-note">{t("footer.note")}</p>
        <a className="text-link" href="#home">
          {t("footer.backToTop")} <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
