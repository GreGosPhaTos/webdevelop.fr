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
    id: 'menu.top',
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
  const [goTo, setGoTo] = useState<string | null>(null);

  const handleOnClickNav = (): void => {
    setMenuIsShown(!(menuIsShown ?? false));
  };

  const handleOnClickMenuItem = (anchor: string) => (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    setGoTo(anchor);
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
    if (goTo === '#contact') {
      const addBck = anime({
        targets: '.final_background',
        opacity: 1,
        easing: 'linear',
        duration: 20,
        autoplay: false
      });

      addBck.play();
    }

    if (goTo != null) {
      href(goTo);
    }
  }, [goTo]);

  const MenuLink = (props: { anchor: string, text: string, pos?: number, ref?: React.MutableRefObject<HTMLAnchorElement | null> }): ReactElement =>
    <a onClick={handleOnClickMenuItem(props.anchor)} href={props.anchor}>{props.text}</a>;
  const handleOnClickLangButton = (): void => href(intl.formatMessage(messages['menu.langButtonURL']));

  return (
    <>
      <div id='top-menu'>
        <button id="lang" onClick={handleOnClickLangButton}>{intl.formatMessage(messages['menu.langButtonText'])}</button>
        <button ref={btnRef} onClick={handleOnClickNav} id="nav">+</button >
      </div >
      <div ref={menuRef} id='nav-menu'>
        <MenuLink anchor={'#who_am_i'} text={intl.formatMessage(messages['menu.aboutme'])} />
        <MenuLink anchor={'#my_work'} text={intl.formatMessage(messages['menu.mywork'])} />
        <MenuLink anchor={'#contact'} text={intl.formatMessage(messages['menu.contact'])} />
        <MenuLink anchor={'#top'} text={intl.formatMessage(messages['menu.top'])} />
      </div>
    </>
  );
};

export default TopMenu;
