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
import { Poppins, Montserrat, Manrope, Urbanist } from "next/font/google";
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
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

// Site-wide SEO defaults
import { DefaultSeo, OrganizationJsonLd, LogoJsonLd, LocalBusinessJsonLd } from "next-seo";
import WhatsAppButton from "../components/WhatsAppButton";

gsap.registerPlugin(ScrollTrigger);
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const baseUrl = "https://www.trimsel.com";
  const cleanPath = router.asPath.split("?")[0].split("#")[0];
  const canonicalUrl =
    cleanPath && cleanPath !== "/"
      ? `${baseUrl}${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`
      : `${baseUrl}/`;

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
    <div className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} ${urbanist.variable}`}>
      {/* Viewport once for the whole app */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>

      {/* Site-wide SEO defaults (per-page <NextSeo> can override) */}
      <DefaultSeo
        defaultTitle="Trimsel – Software, Cloud & AI Services"
        titleTemplate="%s | Trimsel"
        description="Trimsel is an AI-powered software development company in Chennai delivering custom mobile apps, cloud solutions, DevOps, AI, and digital marketing."
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          site_name: "Trimsel",
          url: canonicalUrl,
          locale: "en_IN",
          images: [
            {
              url: "https://www.trimsel.com/images/home-hero-banner.webp",
              width: 1200,
              height: 630,
              alt: "Trimsel team delivering cloud, mobile, and AI solutions",
            },
            {
              url: "https://www.trimsel.com/images/mobilehero.webp",
              width: 800,
              height: 418,
              alt: "Trimsel team delivering cloud, mobile, and AI solutions",
            },
          ],
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
          {
            name: "format-detection",
            content: "telephone=no",
          },
        ]}
      />
      <OrganizationJsonLd
        id="https://www.trimsel.com/#org"
        name="Trimsel"
        legalName="Trimsel"
        url="https://www.trimsel.com/"
        logo="https://www.trimsel.com/images/logo.png"
        image="https://www.trimsel.com/images/logo.png"
        description="Trimsel is a technology partner delivering AI/ML application development, mobile apps, web platforms, cloud consulting, DevOps, and digital marketing for global brands."
        foundingDate="2024-09-01"
        address={{
          "@type": "PostalAddress",
          streetAddress:
            "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Indira Nagar, Guindy",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600032",
          addressCountry: "IN",
        }}
        sameAs={[
          "https://www.linkedin.com/company/trimsel",
          "https://www.instagram.com/trimsel_softwares/",
          "https://www.facebook.com/trimsel.softwares",
          "https://in.pinterest.com/trimsel/",
        ]}
        contactPoint={[
          {
            telephone: "+91 72008 41581",
            contactType: "customer service",
            areaServed: "Worldwide",
            availableLanguage: ["en"],
          },
        ]}
        knowsAbout={[
          "AI & ML development",
          "Mobile app development",
          "Digital marketing",
          "DevOps consulting",
          "Cloud consulting",
          "Web development",
        ]}
      />
      <LogoJsonLd logo="https://www.trimsel.com/images/logo.png" url="https://www.trimsel.com/" />
      <LocalBusinessJsonLd
        type="ProfessionalService"
        id="https://www.trimsel.com/#location"
        name="Trimsel"
        description="Trimsel is a technology partner delivering AI/ML application development, mobile apps, web platforms, cloud consulting, DevOps, and digital marketing for global brands."
        url="https://www.trimsel.com/"
        telephone="+91 72008 41581"
        address={{
          streetAddress:
            "No. 21-B, 5th Cross St, South Phase, Thiru Vi Ka Industrial Estate, Indira Nagar, Guindy",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600032",
          addressCountry: "IN",
        }}
        geo={{
          latitude: 13.008903,
          longitude: 80.213701,
        }}
        openingHours={[
          {
            opens: "00:00",
            closes: "23:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
        ]}
        sameAs={[
          "https://www.linkedin.com/company/trimsel",
          "https://www.instagram.com/trimsel_softwares/",
          "https://www.facebook.com/trimsel.softwares",
          "https://in.pinterest.com/trimsel/",
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

      <Component {...pageProps} />
      <WhatsAppButton />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
