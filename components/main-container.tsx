import React from 'react';
import PropTypes from 'prop-types';
import { Moon } from './moon';
import { Metas } from './metas';
import Content from './content';
import Footer from './footer';
import Header from './header';

// Types
interface Props {
  lang: string
};

export const MainContainer: React.FunctionComponent<Props> = ({ lang }) => {
  return (
    <div className="cf h-100 min-h-100">
      <Moon />
      <Metas lang={lang} />
      <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
        <Header lang={lang} />
        <Content lang={lang} />
        <Footer />
      </div>
    </div>
  );
};

MainContainer.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en']).isRequired
};
