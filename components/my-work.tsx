import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';
import { useIntl } from 'react-intl';
import { useHTMLSanitizer } from '../hooks/useHTMLSanitizer';

const messages = {
  myWorkDiv: {
    id: 'myWorkDiv',
    defaultMessage:
      '<h3>Mes projets</h3>' +
      '<p>' +
      'Voici une liste de quelques projets personnel r&eacute;cents pour lequels j\'ai consacr&eacute; du temps et du &#128155;.<br /><br />' +
      '</p>' +
      '<ul>' +
      "<li>Mes <a href='https://medium.com/@adrien.petitjean84'>articles Medium</a></li>" +
      "<li>Un template pour cr&eacute;er des <a href='https://github.com/GreGosPhaTos/typescript-lambda'>Lambdas AWS avec Typescript</a>.</li>" +
      "<li>Le site web de <a href='https://emma-roussel-naturopathe.com/'>Emma Roussel Naturopathe</a>.</li>" +
      "<li><a href='https://github.com/GreGosPhaTos/bigfile'>Bigfile</a> : Un executable qui identifie les gros fichiers sur votre syst&egrave;me.</li>" +
      "<li><a href='https://github.com/GreGosPhaTos/zippy'>Zippy</a> : Un archiveur fait avec Electron JS.</li>" +
      "<li><a href='https://codepen.io/GreGosPhaTos/pen/yLxBdMB'>Quelques projets sur CodePen</a></li>" +
      "<li>Et <a href='https://github.com/GreGosPhaTos/webdevelop.fr'>ce site</a> fait avec next js.</li>" +
      '</ul>' +
      '<p>' +
      'Plus de projets &agrave; venir...' +
      '</p>'
  }

};
const MyWork = (): ReactElement => {
  const myWork = useRef(null);
  const intl = useIntl();
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const handleScroll = useCallback((scrollPosition: number): void => {
    // Get the scroll height of the page
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Start at 50% of the scroll height
    const start = scrollHeight * 0.3;

    if (animationRef.current != null && scrollPosition >= start) {
      animationRef.current.seek(animationRef.current.duration * ((scrollPosition - start) / (scrollHeight - start)));
    }
  }, []);

  useEffect(() => {
    const animation = anime({
      targets: myWork.current,
      translateY: '-50vh',
      easing: 'easeInOutQuad',
      elasticity: 200,
      autoplay: false
    });

    animationRef.current = animation;
  }, []);
  useScroll(handleScroll);
  const { sanitizeHTML } = useHTMLSanitizer();

  return (
    <article id="my_work">
      <div ref={myWork} className="quote" dangerouslySetInnerHTML={{ __html: sanitizeHTML(intl.formatMessage(messages.myWorkDiv)) }} />
    </article >
  );
};

export default MyWork;
