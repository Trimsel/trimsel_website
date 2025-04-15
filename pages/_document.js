import { Analytics } from '@vercel/analytics/react';
import { Html, Head, Main, NextScript } from 'next/document';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/trimsel-logo-favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
        <Analytics />
      </body>
    </Html>
  );
}