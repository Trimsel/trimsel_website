// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset once for the whole site */}
        <meta charSet="utf-8" />

        {/* Favicons (keep your SVG; add ICO + apple-touch if you have them) */}
        <link rel="icon" href="/trimsel-logo-favicon.svg" />
        {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Theme color for address bar (optional) */}
        <meta name="theme-color" content="#0b0f19" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}