import React, { ReactElement, useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';
import { Moon } from './moon';

const Footer = (): ReactElement => {
  const footerRef = useRef(null);
  const finalBckRef = useRef(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const backgroundFadeInAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const backgroundFadeOutAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const handleScroll = (scrollPosition: number): void => {
    // Get the scroll height of the page
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const startBackgrdAnimation = scrollHeight * 0.8;
    const startTranslateAnimation = scrollHeight * 0.6;

    if (backgroundFadeInAnimationRef.current != null && scrollPosition >= startBackgrdAnimation) {
      const percent = (scrollPosition - startBackgrdAnimation) / (scrollHeight - startBackgrdAnimation);
      // backgroundFadeOutAnimationRef.current.pause();
      backgroundFadeInAnimationRef.current.seek(backgroundFadeInAnimationRef.current.duration * percent);
    };

    if (animationRef.current != null && scrollPosition >= startTranslateAnimation) {
      const percent = (scrollPosition - startTranslateAnimation) / (scrollHeight - startTranslateAnimation);
      animationRef.current.seek(animationRef.current.duration * percent);
    }
  };

  useEffect(() => {
    const animation = anime({
      targets: footerRef.current,
      translateY: -400,
      // delay: function (_el, i) { return i * 100; },
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
  }, []);

  useScroll(handleScroll);

  return (
    <>
      <footer ref={footerRef} id="contact" className='background'>
        <Moon />
        <div className="quote">
          <h3>Contact me</h3>
          <p>
            Ready to reach for the moon together? Reach out to me at <a href='mailto:adrien.petitjean84@gmail.com'>adrien.petitjean84@gmail.com</a>.<br /><br />
          </p>
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
