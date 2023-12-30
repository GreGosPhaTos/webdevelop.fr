import React, { ReactNode } from 'react';
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
  locale: string;
  errorPage?: '404';
  children?: ReactNode;
}

export const MainContainer: React.FunctionComponent<Props> = ({
  locale,
  errorPage,
  children
}) => {
  const messages = locale === 'en' ? messages_en : {};

  if (errorPage === '404') {
    return (
      <IntlProvider locale={locale} defaultLocale="fr" messages={messages}>
        <main>
          <Metas />
          <TopMenuError />
          <Header errorPage={errorPage} />
        </main>
      </IntlProvider>
    );
  }

  if (typeof children !== 'undefined') {
    return (
      <IntlProvider locale={locale} defaultLocale="fr" messages={messages}>
        <main>{children}</main>
      </IntlProvider>
    );
  }

  return (
    <IntlProvider locale={locale} defaultLocale="fr" messages={messages}>
      <main>
        <Metas />
        <TopMenu />

        <Header />
        <AboutMe />
        <MyWork />
        <Footer />
      </main>
    </IntlProvider>
  );
};

MainContainer.defaultProps = {
  errorPage: undefined,
  children: undefined
};

MainContainer.propTypes = {
  errorPage: PropTypes.oneOf(['404']),
  children: PropTypes.node,
  locale: PropTypes.oneOf(['fr', 'en']).isRequired
};
