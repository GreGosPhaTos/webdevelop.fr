import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import messages_en from '../lang/en.json';

import Header from './header';
import { Metas } from './metas';
import AboutMe from './about-me';
import MyWork from './my-work';
import Footer from './footer';
import TopMenu from './top-menu';
import TopMenuError from './top-menu-error';

// Types
interface Props {
  locale: string
  errorPage?: '404'
};

export const MainContainer: React.FunctionComponent<Props> = ({ locale, errorPage }) => {
  const messages = locale === 'en' ? messages_en : {};

  if (errorPage === '404') {
    return (
      <IntlProvider locale={locale} defaultLocale='fr' messages={messages} >
        <main>
          <Metas />
          <TopMenuError />
          <Header errorPage={errorPage} />
        </main >
      </IntlProvider>
    );
  }

  return (
    <IntlProvider locale={locale} defaultLocale='fr' messages={messages} >
      <main>
        <Metas />
        <TopMenu />

        <Header />
        <AboutMe />
        <MyWork />
        <Footer />
      </main >
    </IntlProvider>
  );
};

MainContainer.defaultProps = {
  errorPage: undefined
};

MainContainer.propTypes = {
  errorPage: PropTypes.oneOf(['404']),
  locale: PropTypes.oneOf(['fr', 'en']).isRequired
};
