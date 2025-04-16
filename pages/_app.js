import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/port.css';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/wholestyle.css';
import '../styles/mbl.css';
import '../styles/devops.css';
import '../styles/typography.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min');

    const cleanBodyStyles = () => {
      // ✅ Fix overflow issue
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');

      // ✅ Remove any leftover Bootstrap backdrop elements
      const backdrops = document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop');
      backdrops.forEach(el => el.remove());
    };

    router.events.on('routeChangeComplete', cleanBodyStyles);
    return () => {
      router.events.off('routeChangeComplete', cleanBodyStyles);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MXLK9Z82J3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MXLK9Z82J3', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script type="module" src="/sc.js" strategy="lazyOnload" />

      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}