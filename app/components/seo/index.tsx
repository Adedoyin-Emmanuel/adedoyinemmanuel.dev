import React from "react";
import { siteConfig } from "@/config/site";

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const Seo = ({ title, description, image, url, keywords }: SeoProps) => {
  return (
    <>
      <title>{title ?? siteConfig.headline}</title>
      <meta
        name="description"
        content={description ?? siteConfig.description}
      />
      <meta name="keywords" content={keywords ?? siteConfig.keywords} />
      <meta name="image" content={image ?? siteConfig.image} />
      <meta name="url" content={url ?? siteConfig.domain} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <meta property="og:title" content={title ?? siteConfig.headline} />
      <meta
        property="og:description"
        content={description ?? siteConfig.description}
      />
      <meta property="og:image" content={image ?? siteConfig.image} />
      <meta
        name="og:image:alt"
        content={description ?? siteConfig.description}
      />
      <meta property="og:url" content={url ?? siteConfig.domain} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Clipsave" />

      <meta property="twitter:title" content={title ?? siteConfig.headline} />
      <meta
        property="twitter:description"
        content={description ?? siteConfig.description}
      />
      <meta name="twitter:title" content={title ?? siteConfig.headline} />
      <meta name="twitter:image" content={image ?? siteConfig.image} />
      <meta name="twitter:image:src" content={image ?? siteConfig.image} />
      <meta name="twitter:site" content="@Emmysoft_Tm" />

      <meta property="twitter:url" content={url ?? siteConfig.domain} />
      <meta property="twitter:type" content="website" />
      <meta name="twitter:site" content="@emmysoft_tm" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@emmysoft_tm" />

      <link rel="icon" href="/favicon.ico" />

      <meta name="apple-mobile-web-app-title" content="Clipsave Series" />

      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#527ff1" />
      <meta name="application-name" content="Adedoyin Emmanuel" />
      <meta name="msapplication-TileImage" content="/emmysoft.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Clipsave" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </>
  );
};

export default Seo;
