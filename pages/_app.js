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

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      {/* ✅ Load GA4 script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
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

      {/* Your custom script */}
      <Script type="module" src="/sc.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}