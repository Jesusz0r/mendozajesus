import { HelmetProvider } from "react-helmet-async";
import GlobalCSS from "../styles/GlobalCSS";

// Components
import Footer from "./Footer";
import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <GlobalCSS />
      <SEO />

      {children}
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
