import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';

// Types
interface Props { errorPage?: string };

// I18n
const messages = {
  heading2: {
    id: 'hero.heading2',
    defaultMessage: 'Développeur Web'
  }
};

const Header = ({ errorPage }: Props): ReactElement => {
  const intl = useIntl();
  const headerRef = useRef(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const parallaxHeadingRef = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback((scrollPosition: number): void => {
    if (animationRef.current != null) {
      animationRef.current.seek(animationRef.current.duration * (scrollPosition / 2000));
    }
  }, []);
  useEffect(() => {
    animationRef.current = anime({
      targets: parallaxHeadingRef.current,
      translateY: -450,
      easing: 'easeInOutSine',
      autoplay: false,
      elasticity: 200
    });
  }, []);
  useScroll(handleScroll);

  if (errorPage === '404') {
    return (<>
      <div id="top" className="header-container" />
      <header>
        <div className="parallax-heading">
          <h1>oops.. Not found</h1>
        </div>
      </header >
    </>);
  }

  return (
    <>
      <div id="top" className="header-container" />
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
  errorPage: undefined
};

Header.propTypes = {
  errorPage: PropTypes.oneOf(['404'])
};

export default Header;
