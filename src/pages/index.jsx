import { useEffect } from "react";
import i18n from "../i18n";

import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import Bookshelf from "../components/Bookshelf";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/HeroSection";
import LiveProjects from "../components/LiveProjects";

const CAREER_START_DATE = new Date(2017, 0, 1);

const getYearsOfExperience = () => {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START_DATE.getFullYear();
  const monthDifference = now.getMonth() - CAREER_START_DATE.getMonth();

  return monthDifference < 0 ? years - 1 : years;
};

const resolveLanguageFromPath = () => {
  const path = window.location.pathname;
  if (path.startsWith("/en")) return "en";
  if (path.startsWith("/es")) return "es";
  return "es";
};

const HomePage = () => {
  const yearsOfExperience = getYearsOfExperience();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      window.history.replaceState({}, "", "/es");
    }

    const targetLang = resolveLanguageFromPath();
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }

    const handlePopState = () => {
      const lang = resolveLanguageFromPath();
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <Layout>
      <HeroSection yearsOfExperience={yearsOfExperience} />
      <AboutSection yearsOfExperience={yearsOfExperience} />
      <LiveProjects />
      <Bookshelf />
      <ExperienceSection />
    </Layout>
  );
};

export default HomePage;
