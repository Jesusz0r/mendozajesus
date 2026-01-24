import { HelmetProvider } from "react-helmet-async";

// Components
import Footer from "./Footer";
import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <SEO />
      {children}
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
