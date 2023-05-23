import anime from 'animejs';
import React, { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLink } from '../hooks/useLink';

const messages = {
  'menu.aboutme': {
    id: 'menu.aboutme',
    defaultMessage: 'A propos de moi'
  },

  'menu.mywork': {
    id: 'menu.mywork',
    defaultMessage: 'Mes projets'
  },

  'menu.top': {
    id: 'menu.aboutme',
    defaultMessage: 'Intro'
  },

  'menu.contact': {
    id: 'menu.contact',
    defaultMessage: 'Contact'
  },

  'menu.langButtonText': {
    id: 'menu.langButtonText',
    defaultMessage: 'EN'
  },

  'menu.langButtonURL': {
    id: 'menu.langButtonURL',
    defaultMessage: 'https://webdevelop.fr/index-en.html'
  }

};

const TopMenu = (): ReactElement => {
  const intl = useIntl();
  const { href } = useLink();
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const [menuIsShown, setMenuIsShown] = useState<boolean | null>(null);
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleOnClickNav = (): void => {
    setMenuIsShown(!(menuIsShown ?? false));
  };

  const handleOnClickMenuItem = (scrollPosition?: number) => (event: MouseEvent<HTMLAnchorElement>): void => {
    if (scrollPosition != null && scrollPosition > 0) {
      event.preventDefault();
    }

    setSrollPosition(scrollPosition ?? 0);
    setMenuIsShown(menuIsShown === false);
  };

  useEffect(() => {
    const fadeAnimationIn = anime({
      targets: menuRef.current,
      left: '0%',
      easing: 'linear',
      elasticity: 200,
      duration: 600,
      autoplay: false
    });

    const fadeAnimationOut = anime({
      targets: menuRef.current,
      left: '-100%',
      easing: 'linear',
      elasticity: 200,
      duration: 600,
      autoplay: false
    });

    const btnAnimOptions = {
      targets: btnRef.current,
      rotate: '+=45',
      easing: 'linear',
      elasticity: 200,
      duration: 600,
      autoplay: false
    };
    const btnAnimationIn = anime(btnAnimOptions);
    const btnAnimationOut = anime({ ...btnAnimOptions, rotate: '-=45' });

    if (menuIsShown === true) {
      fadeAnimationIn.play();
      btnAnimationIn.play();
    }

    if (menuIsShown === false) {
      fadeAnimationOut.play();
      btnAnimationOut.play();
    }
  }, [menuIsShown]);

  useEffect(() => {
    const position = (scrollPosition * document.documentElement.scrollHeight) / 100;
    window.scrollTo({ top: position, left: 0 });
    const removeBck = anime({
      targets: '.final_background',
      opacity: 0,
      easing: 'linear',
      duration: 20,
      autoplay: false
    });

    removeBck.play();
  }, [scrollPosition]);

  const MenuLink = (props: { anchor: string, text: string, pos?: number, ref?: React.MutableRefObject<HTMLAnchorElement | null> }): ReactElement =>
    <a onClick={handleOnClickMenuItem(props.pos)} href={props.anchor}>{props.text}</a>;
  const handleOnClickLangButton = (): void => href(intl.formatMessage(messages['menu.langButtonURL']));

  return (
    <>
      <div id='top-menu'>
        <button id="lang" onClick={handleOnClickLangButton}>{intl.formatMessage(messages['menu.langButtonText'])}</button>
        <button ref={btnRef} onClick={handleOnClickNav} id="nav">+</button >
      </div >
      <div ref={menuRef} id='nav-menu'>
        <MenuLink pos={20} anchor={'#who_am_i'} text={intl.formatMessage(messages['menu.aboutme'])} />
        <MenuLink pos={50} anchor={'#my_work'} text={intl.formatMessage(messages['menu.mywork'])} />
        <MenuLink pos={100} anchor={'#contact'} text={intl.formatMessage(messages['menu.contact'])} />
        <MenuLink pos={0} anchor={'#top'} text={intl.formatMessage(messages['menu.top'])} />
      </div>
    </>
  );
};

export default TopMenu;
