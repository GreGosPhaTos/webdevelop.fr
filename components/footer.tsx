import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';
import { Moon } from './moon';
import { useHTMLSanitizer } from '../hooks/useHTMLSanitizer';
import { useIntl } from 'react-intl';

const messages = {
  contactDiv: {
    id: 'contactDiv',
    defaultMessage:
      '<h3>Contact</h3>' +
      '<p>' +
      'Ensemble d&eacute;crochons la lune !<br /><br />' +
      "Contactez moi <a href='mailto:adrien.petitjean84@gmail.com'>adrien.petitjean84@gmail.com</a>" +
      '</p>'
  }

};

const Footer = (): ReactElement => {
  const intl = useIntl();
  const footerRef = useRef<HTMLDivElement>(null);
  const finalBckRef = useRef(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const backgroundFadeInAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const backgroundFadeOutAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const handleScroll = useCallback((scrollPosition: number): void => {
    // Get the scroll height of the page
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const startBackgrdAnimation = scrollHeight * 0.8;
    const startTranslateAnimation = scrollHeight * 0.6;

    if (backgroundFadeInAnimationRef.current != null && scrollPosition >= startBackgrdAnimation) {
      const percent = (scrollPosition - startBackgrdAnimation) / (scrollHeight - startBackgrdAnimation);
      backgroundFadeInAnimationRef.current.seek(backgroundFadeInAnimationRef.current.duration * percent);
    };

    if (animationRef.current != null && scrollPosition >= startTranslateAnimation) {
      const percent = (scrollPosition - startTranslateAnimation) / (scrollHeight - startTranslateAnimation);
      animationRef.current.seek(animationRef.current.duration * percent);
    }
  }, []);

  useEffect(() => {
    const animation = anime({
      targets: footerRef.current,
      translateY: '-10vh',
      easing: 'easeInOutQuad',
      elasticity: 200,
      autoplay: false
    });
    const backgroundFadeInAnimation = anime({
      targets: finalBckRef.current,
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 1000,
      autoplay: false
    });

    const backgroundFadeOutAnimation = anime({
      targets: finalBckRef.current,
      opacity: 0,
      easing: 'easeInOutQuad',
      duration: 1000,
      autoplay: false
    });

    backgroundFadeInAnimationRef.current = backgroundFadeInAnimation;
    backgroundFadeOutAnimationRef.current = backgroundFadeOutAnimation;
    animationRef.current = animation;
    handleScroll(window.scrollY);
  }, []);

  useScroll(handleScroll);
  const { sanitizeHTML } = useHTMLSanitizer();

  return (
    <>
      <footer ref={footerRef} id="contact" className='background'>
        <Moon />
        <div className="quote">
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(intl.formatMessage(messages.contactDiv)) }} />
          <p id='social'>
            <a href="https://github.com/GreGosPhaTos" title="Github">
              <img src='./github.svg' />
            </a>
            <a href="https://www.linkedin.com/in/adrien-petitjean-10916255" title="linkedin">
              <img src='./linkedin.svg' />
            </a>
            <a href="https://twitter.com/adPetitjean" title="Twitter">
              <img src='./twitter.svg' />
            </a>
          </p>
        </div>
      </footer>
      <div ref={finalBckRef} className='final_background' />
    </>
  );
};
export default Footer;
