import React, { ReactElement } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document(): ReactElement {
  return (
    <Html >
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="author" content="webdevelop" />
        <meta name="ROBOTS" content="index, follow" />
        <meta name="Revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="verify-v1" content="1LpYuCxQDl9iWbr66GRZhqUQUuMlRaX6fNkHpNekeA4=" />
        <meta name="y_key" content="f1b1ecf1d1f8026f" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      </Head>

      <body key="abc">
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N692VP2XPT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N692VP2XPT');
          `}
        </Script>
      </body>
    </Html>
  );
}
