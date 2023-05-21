import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import { Moon } from './moon';
import Header from './header';
import { Metas } from './metas';
// import Content from './content';
// import Footer from './footer';

// Types
interface Props {
  lang: string
};

export const MainContainer: React.FunctionComponent<Props> = ({ lang }) => {
  const myWork = useRef(null);
  useEffect(() => {
    const animation = anime({
      targets: myWork.current,
      translateY: -200,
      // delay: function (_el, i) { return i * 100; },
      easing: 'easeInOutSine',
      // duration: 4000,
      elasticity: 200,
      autoplay: false
    });

    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      if (myWork?.current != null) {
        // if (scrollPosition >= 1000) {
        animation.seek(animation.duration * (scrollPosition / 2000));
        // }
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
    <main>
      <Metas lang={lang} />
      {/* <div className='background' /> */}
      <div id='top-menu'>
        <button id="lang">EN</button>
        <button id="nav">
          {/* <div id="burger" style={{ pointerEvents: 'all', transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>
            <div className="line h" style={{ backgroundColor: 'rgb(0, 0, 0)', transform: 'translate(0px, 25px) rotate(90deg)' }}></div>
            <div className="line v" style={{ backgroundColor: 'rgb(0, 0, 0)', transform: 'translate(0px, 25px)' }}></div>
          </div> */}
          +
        </button >
      </div >

      <div id='nav-menu'>
        <a href='#who_am_i'>About me</a>
        <a href='#my_work'>My work</a>
        <a href='#contact'>Contact me</a>
        <a href='#top'>Back to the top</a>
      </div>

      <Header lang={lang} />
      <article id="who_am_i">
        <div className="quote">
          <h3>About me</h3>
          <p>
            &#128075; My name is Adrien and I am a web developer. <br />
            I started my journey in 2008, and since then I saw the web evolved a <b>lot</b>. <br /><br />
            I had the chance to work with multiple technoligies, curently I work for @Unity as a Senior Fullstack developer.<br /><br />
            I like all aspect of the web development, and I am always up to learn new stuffs !<br /><br />
            Check out my full experiences on <a href='https://www.linkedin.com/in/adrien-petitjean-10916255'>linkedin</a>.<br /><br />
            I will happy to chat with you, so don't hesite to <a href='#contact'>reach me out</a>.
          </p>
          <a href=''>Learn more</a>
        </div>
      </article>
      <article id="my_work">
        <div ref={myWork} className="quote">
          <h3>My work</h3>
          <p>
            Here is a list of the recent projects I gave &#128155; to.<br /><br />
          </p>
          <ul>
            <li>Read my Medium <a href='#'>posts</a></li>
            <li>A template to create <a href=''>AWS Lambdas with Typescript</a>.</li>
            <li>The website of <a href=''>Emma Roussel Naturopath</a>.</li>
            <li>An archiver made with electron js : <a href=''>Zippy</a>.</li>
            <li>An executable which identifies large files on your system <a href=''>Bigfile</a>.</li>
          </ul>
          <p>
            Check my all my work on my <a href=''>github account</a>.<br /><br />
            More to come...
          </p>
        </div>
      </article>

      <footer id="contact" className='background'>
        <Moon />
        <div className="quote">
          <h3>Contact me</h3>
          <p>
            Ready to reach the moon together ? <a href='mailto:adrien.petitjean84@gmail.com'>adrien.petitjean84@gmail.com</a>.<br /><br />
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
    </main >
    // <div className="cf h-100 min-h-100">
    //   <Moon />
    //   <Metas lang={lang} />
    //   <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
    //     <Header lang={lang} />
    //     <Content lang={lang} />
    //     <Footer />
    //   </div>
    // </div>
  );
};

MainContainer.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en']).isRequired
};
