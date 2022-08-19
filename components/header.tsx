import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

// Types
interface Props { lang?: string };
interface HeaderElements {
  heading2: {
    text: string
  }

  versionLink: {
    href: string
    title: string
    text: string
  }
}

// I18n
const fr: HeaderElements = {
  heading2: {
    text: 'Développeur web'
  },
  versionLink: {
    href: './index-en.html',
    title: 'Version Anglaise',
    text: 'EN'
  }
};

const en: HeaderElements = {
  heading2: {
    text: 'Web developer'
  },
  versionLink: {
    href: './',
    title: 'French version',
    text: 'FR'
  }
};

const Header = ({ lang }: Props): ReactElement => {
  const { heading2, versionLink }: HeaderElements = lang === 'en'
    ? { ...en }
    : { ...fr };

  return (
    <header className="bb b--black-70 pv4">
      <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Adrien Petitjean</h3>
      <h2 className="f3 fw4 i lh-title mt0">{heading2.text}</h2>
      <p className="times lh-copy measure f4 mt0">
        <a className="link dim blue" href={versionLink.href} title={versionLink.title}>{versionLink.text}</a>
      </p>
    </header>
  );
};

Header.defaultTypes = {
  lang: 'fr'
};

Header.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en'])
};

export default Header;
