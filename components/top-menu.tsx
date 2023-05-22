import anime from 'animejs';
import React, { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';

const TopMenu = (): ReactElement => {
  const menuRef = useRef(null);
  const menuFadeAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const removeBckAnimationRef = useRef<anime.AnimeInstance | null>(null);
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleOnClickNav = (): void => {
    if (menuFadeAnimationRef.current != null) {
      menuFadeAnimationRef.current.play();
    }
  };

  const handleOnClickMenuItem = (scrollPosition?: number) => (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    if (scrollPosition != null && scrollPosition > 0) {
      setSrollPosition(scrollPosition);
    }

    if (menuFadeAnimationRef.current != null) {
      menuFadeAnimationRef.current.complete = () => {
        setMenuIsShown(!menuIsShown);
        event.currentTarget?.click();
      };

      menuFadeAnimationRef.current.play();
    }
  };

  useEffect(() => {
    const fadeAnimation = anime({
      targets: menuRef.current,
      opacity: menuIsShown ? [1, 0] : [0, 1],
      easing: 'linear',
      elasticity: 200,
      duration: 600,
      autoplay: false,
      complete: () => {
        setMenuIsShown(!menuIsShown);
      }
    });

    const removeBck = anime({
      targets: '.final_background',
      opacity: 0,
      easing: 'linear',
      duration: 20,
      complete: () => {
        console.log('back should be hidden');
      },

      autoplay: false
    });

    menuFadeAnimationRef.current = fadeAnimation;
    removeBckAnimationRef.current = removeBck;
  }, [menuIsShown, setMenuIsShown]);

  useEffect(() => {
    const position = (scrollPosition * document.documentElement.scrollHeight) / 100;
    window.scrollTo({ top: position, left: 0 });
    if (removeBckAnimationRef != null && scrollPosition < 90) {
      removeBckAnimationRef.current?.play();
    }
  }, [scrollPosition]);

  const MenuLink = (props: { pos: number, ref?: React.MutableRefObject<HTMLAnchorElement | null>, anchor: string, text: string }): ReactElement =>
    <a onClick={handleOnClickMenuItem(props.pos)} href={props.anchor}>{props.text}</a>;

  return (
    <>
      <div id='top-menu'>
        <button id="lang">EN</button>
        <button onClick={handleOnClickNav} id="nav">+</button >
      </div >
      <div ref={menuRef} id='nav-menu'>
        <MenuLink pos={30} anchor={'#who_am_i'} text={'About me'} />
        <MenuLink pos={60} anchor={'#my_work'} text={'My work'} />
        <MenuLink pos={90} anchor={'#contact'} text={'Contact me'} />
        <MenuLink pos={0} anchor={'#top'} text={'Back to the top'} />
      </div>
    </>
  );
};

export default TopMenu;
