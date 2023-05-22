import React, { ReactElement, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';

// Types
interface Props { lang?: string };

// I18n
const messages = {
  heading2: {
    id: 'hero.heading2',
    defaultMessage: 'Développeur Web'
  }
};

const Header = ({ lang }: Props): ReactElement => {
  const intl = useIntl();
  const headerRef = useRef(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const parallaxHeadingRef = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollPosition: number): void => {
    if (animationRef.current != null) {
      animationRef.current.seek(animationRef.current.duration * (scrollPosition / 2000));
    }
  };
  useEffect(() => {
    animationRef.current = anime({
      targets: parallaxHeadingRef.current,
      // scale: 1 + scrollPosition * 0.0003,
      // translateY: -scrollPosition * 0.5,
      translateY: -450,
      // opacity: 1 - scrollPosition * 0.0002,
      easing: 'easeInOutSine',
      autoplay: false,
      elasticity: 200
    });
  }, []);
  useScroll(handleScroll);

  return (
    <>
      <div id="top" className="header-container">
      </div>
      <header ref={headerRef}>
        <div ref={parallaxHeadingRef} className="parallax-heading">
          <h1>ADRIEN PETITJEAN</h1>
          <h2>{intl.formatMessage(messages.heading2)}</h2>
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
