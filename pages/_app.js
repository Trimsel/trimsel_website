// pages/_app.js
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// 1) Put globals FIRST so tokens/variables exist before other CSS
import "../styles/globals.css";

// Keep Bootstrap CSS next; custom CSS can override it below
import "bootstrap/dist/css/bootstrap.css";

// 2) Custom styles
import "../styles/typography.css";
import "../styles/port.css";
import "../styles/wholestyle.css";
import "../styles/mbl.css";
import "../styles/devops.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";

// Fonts via next/font (no render-blocking @import)
import { Poppins, Montserrat } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Site-wide SEO defaults
import { DefaultSeo, OrganizationJsonLd, LogoJsonLd, SiteLinksSearchBoxJsonLd } from "next-seo";

gsap.registerPlugin(ScrollTrigger);
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Load Bootstrap JS once on client; clean up backdrops on route change
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");

    const cleanBodyStyles = () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.classList.remove("modal-open");
      document
        .querySelectorAll(".offcanvas-backdrop, .modal-backdrop")
        .forEach((el) => el.remove());
    };

    router.events.on("routeChangeComplete", cleanBodyStyles);
    return () => router.events.off("routeChangeComplete", cleanBodyStyles);
  }, [router.events]);

  // GA single-page app pageviews
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", "G-8PHY8FQ1CW", { page_path: url });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    // Apply font variables at the top-level wrapper
    <div className={`${poppins.variable} ${montserrat.variable}`}>
      {/* Viewport once for the whole app */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Site-wide SEO defaults (per-page <NextSeo> can override) */}
      <DefaultSeo
        openGraph={{
          type: "website",
          site_name: "Trimsel",
          url: "https://www.trimsel.com/",
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@TrimselSoftwares",
          site: "@TrimselSoftwares",
        }}
        additionalMetaTags={[
          // Good global default; you can still override per page
          {
            name: "robots",
            content:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ]}
      />
      <OrganizationJsonLd
        id="https://www.trimsel.com/#org"
        name="Trimsel"
        legalName="Trimsel"
        url="https://www.trimsel.com/"
        logo="https://www.trimsel.com/images/logo.png"
        sameAs={[
          "https://www.linkedin.com/company/trimsel",
          "https://www.instagram.com/trimsel_softwares/",
        ]}
        contactPoint={[
          {
            telephone: "+91 72008 41581",
            contactType: "customer service",
            areaServed: "Worldwide",
            availableLanguage: ["en"],
          },
        ]}
      />
      <LogoJsonLd logo="https://www.trimsel.com/images/logo.png" url="https://www.trimsel.com/" />
      <SiteLinksSearchBoxJsonLd
        id="https://www.trimsel.com/#website"
        url="https://www.trimsel.com/"
        potentialActions={[
          {
            target: "https://www.trimsel.com/search?q={search_term_string}",
            queryInput: "required name=search_term_string",
          },
        ]}
      />

      {/* GA: load afterInteractive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8PHY8FQ1CW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-8PHY8FQ1CW', { page_path: window.location.pathname });
        `}
      </Script>

      {/* Your custom script (lazy) */}
      <Script type="module" src="/sc.js" strategy="lazyOnload" />

      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
