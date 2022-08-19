import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Types
interface Props {
  lang: string
};

interface Metadata {
  keywords: string
  description: string
  title: {
    text: string
  }
}

// I18n
const fr: Metadata = {
  description: 'Adrien Petitjean développeur web, webdevelop.fr',
  title: {
    text: 'Développeur Web : Adrien Petitjean - webdevelop.fr'
  },
  keywords: 'Adrien Petitjean, développeur web, PHP, SQL, nodeJs,  JavaScript, AJAX, web'
};

const en: Metadata = {
  description: 'Adrien Petitjean Web developer',
  title: {
    text: 'Adrien Petitjean - Web developer'
  },
  keywords: 'Adrien Petitjean, web developer, software engineer'

};

export const Metas: React.FunctionComponent<Props> = ({ lang }) => {
  const { description, title: { text: textTitle }, keywords }: Metadata = lang === 'en'
    ? { ...en }
    : { ...fr };
  return (
    <Head>
      <title>{textTitle}</title>
      <meta httpEquiv="content-language" content={lang} />
      <meta name="dc.description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

Metas.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en']).isRequired
};
