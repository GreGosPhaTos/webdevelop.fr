import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

interface Props {
  lang: string
};

const metas = (lang: string): Record<string, string> => ({
  'dc.description':
    lang === 'fr'
      ? 'Adrien Petitjean développeur web, webdevelop.fr'
      : 'Adrien Petitjean Web developer',
  description:
    lang === 'fr'
      ? 'Adrien Petitjean développeur web, webdevelop.fr'
      : 'Adrien Petitjean Web developer',
  keywords:
    lang === 'fr'
      ? 'Adrien Petitjean, développeur web, PHP, SQL, nodeJs,  JavaScript, AJAX, web'
      : 'Adrien Petitjean, web developer, software engineer'
});

const title = (lang: string): string =>
  lang === 'fr'
    ? 'Développeur Web : Adrien Petitjean - webdevelop.fr'
    : 'Adrien Petitjean - Web developer';

export const Metas: React.FunctionComponent<Props> = ({ lang }) => (
  <Head>
    <title>{title(lang)}</title>
    <meta httpEquiv="content-language" content={lang} />
    <meta name="dc.description" content={metas(lang)['dc.description']} />
    <meta name="keywords" content={metas(lang).keywords} />
    <meta name="description" content={metas(lang).description} />
    <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
  </Head>
);

Metas.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en']).isRequired
};
