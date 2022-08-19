import React, { ReactElement } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { Metas } from '../components/metas';
import Script from 'next/script';

export default function Document(): ReactElement {
  return (
    <Html >
      <Metas lang="fr" />
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="author" content="webdevelop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="ROBOTS" content="index, follow" />
        <meta name="Revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="verify-v1" content="1LpYuCxQDl9iWbr66GRZhqUQUuMlRaX6fNkHpNekeA4=" />
        <meta name="y_key" content="f1b1ecf1d1f8026f" />
      </Head>

      <body key="abc" className="bg-white black-80 h-100">
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-12007647-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-12007647-1');
          `}
        </Script>
      </body>
    </Html>
  );
}
