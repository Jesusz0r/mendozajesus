import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 rounded-full"
    >
      {t("language.switch")}
    </Button>
  );
};

export default LanguageSwitcher;
