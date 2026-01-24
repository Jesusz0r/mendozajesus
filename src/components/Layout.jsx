// Components
import Footer from "./Footer";
import SEO from "./SEO";
import LanguageSwitcher from "./LanguageSwitcher";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <LanguageSwitcher />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
