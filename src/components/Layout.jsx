import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import HashScroll from "./HashScroll";
import Navigation from "./Navigation";
import SEO from "./SEO";

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <SEO />
      <HashScroll />
      <a className="skip-link" href="#main-content">
        {t("navigation.skip")}
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
