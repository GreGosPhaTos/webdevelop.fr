import React, { ReactElement, useEffect, useRef } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import anime from 'animejs';

// Types
interface Props { lang?: string };

// I18n
const messages = {

};
const fr: HeaderElements = {
  heading2: {
    text: 'Développeur web'
  }
  // versionLink: {
  //   href: './index-en.html',
  //   title: 'Version Anglaise',
  //   text: 'EN'
  // }
};

const en: HeaderElements = {
  heading2: {
    text: 'Web developer'
  }
};

const Header = ({ lang }: Props): ReactElement => {
  const { heading2 }: HeaderElements = lang === 'en'
    ? { ...en }
    : { ...fr };
  const headerRef = useRef(null);
  const parallaxHeadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const h1Element = parallaxHeadingRef.current;
    const animation = anime({
      targets: parallaxHeadingRef.current,
      // scale: 1 + scrollPosition * 0.0003,
      // translateY: -scrollPosition * 0.5,
      translateY: -450,
      // opacity: 1 - scrollPosition * 0.0002,
      easing: 'easeInOutQuad',
      autoplay: false,
      elasticity: 200
    });

    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      if (parallaxHeadingRef?.current != null) {
        animation.seek(animation.duration * (scrollPosition / 1000));
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="top" className="header-container">
      </div>
      <header ref={headerRef}>
        <div ref={parallaxHeadingRef} className="parallax-heading">
          <h1>ADRIEN PETITJEAN</h1>
          <h2>{heading2.text}</h2>
        </div>
      </header>
    </>
  );
};

Header.defaultTypes = {
  lang: 'fr'
};

Header.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en'])
};

export default Header;
