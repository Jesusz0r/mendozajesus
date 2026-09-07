import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import config from "../config";

const SEO = () => {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage;
  const prefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
  const homeURL = `${config.siteUrl}${prefix}`;
  const url = `${homeURL}/${language}`;
  const image = config.siteBanner ? `${homeURL}${config.siteBanner}` : null;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: config.siteTitle,
    headline: config.siteHeadline,
    description: config.siteDescription,
    inLanguage: language,
    author: {
      "@type": "Person",
      name: config.author,
    },
  };

  return (
    <>
      <title>{config.siteTitleAlt}</title>
      <meta name="description" content={config.siteDescription} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="es" href={`${homeURL}/es`} />
      <link rel="alternate" hrefLang="en" href={`${homeURL}/en`} />
      <meta property="og:locale" content={language === "es" ? "es_ES" : "en_US"} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.siteTitleAlt} />
      <meta property="og:description" content={config.siteDescription} />
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={config.siteTitleAlt} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={config.siteDescription} />
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={config.siteDescription} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={config.siteDescription} />
        </>
      )}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </>
  );
};

export default SEO;
