import Footer from "./Footer";
import HashScroll from "./HashScroll";
import Navigation from "./Navigation";
import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <HashScroll />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
