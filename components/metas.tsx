import React from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';

// I18n
const messages = {
  title: {
    id: 'meta.title',
    defaultMessage: 'Développeur Web : Adrien Petitjean - webdevelop.fr'
  },
  'dc.description': {
    id: 'dc.description',
    defaultMessage: 'Adrien Petitjean développeur web, webdevelop.fr'
  },
  keywords: {
    id: 'meta.keywords',
    defaultMessage: 'Adrien Petitjean, développeur web, PHP, SQL, nodeJs,  JavaScript, AJAX, web'
  },
  'meta.description': {
    id: 'meta.description',
    defaultMessage: 'Adrien Petitjean développeur web, webdevelop.fr'
  },
  locale: {
    id: 'locale',
    defaultMessage: 'fr'
  }
};

export const Metas: React.FunctionComponent = () => {
  const intl = useIntl();
  return (
    <Head>
      <title>{intl.formatMessage(messages.title)}</title>
      <meta httpEquiv="content-language" content={intl.formatMessage(messages.locale)} />
      <meta name="dc.description" content={intl.formatMessage(messages['dc.description'])} />
      <meta name="keywords" content={intl.formatMessage(messages.keywords)} />
      <meta name="description" content={intl.formatMessage(messages['meta.description'])} />
    </Head>
  );
};
