import React, { useEffect, useRef } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import messages_en from '../lang/en-CA.json';

import Header from './header';
import { Metas } from './metas';
import AboutMe from './about-me';
import MyWork from './my-work';
import Footer from './footer';
import TopMenu from './top-menu';
// import Content from './content';
// import Footer from './footer';

// Types
interface Props {
  locale: string
};

export const MainContainer: React.FunctionComponent<Props> = ({ locale }) => {
  const messages = locale !== 'fr' ? messages_en : {};

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
      {/* <div className="cf h-100 min-h-100">
        <Moon />
        <Metas lang={lang} />
        <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
          <Header lang={lang} />
          <Content lang={lang} />
          <Footer />
        </div>
      </div> */}
    </IntlProvider>
  );
};

MainContainer.propTypes = {
  locale: PropTypes.oneOf(['fr', 'en-CA']).isRequired
};
