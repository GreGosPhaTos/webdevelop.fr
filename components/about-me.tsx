import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useHTMLSanitizer } from '../hooks/useHTMLSanitizer';

const messages = {
  aboutMeHeading: {
    id: 'aboutMeHeading',
    defaultMessage: '&agrave; propos de moi'
  },
  aboutMeParagraph: {
    id: 'aboutMeParagraph',
    defaultMessage: '&#128075; Je m\'appelle Adrien, et je suis d&eacute;velopeur web.<br />' +
      'J\'ai commenc&eacute; &agrave; travailler dans le web en 2008, et depuis lors, j\'ai pu observer son &eacute;volution constante et croissante. <br /><br />' +
      'Mon &eacute;xperience m\'a permis de travailler avec de multiple technologies, et actuellement je travaille chez <a href="https://unity.com/">Unity technologies</a> en tant que d&eacute;velopeur fullstack.<br /><br />' +
      'J\'aime tous les aspects du d&eacute;velopement web, je suis toujours pr&ecirc;t &agrave; apprendre de nouvelle choses !<br /><br />' +
      'Pour en savoir plus sur mon parcours professionnel : <a href="https://www.linkedin.com/in/adrien-petitjean-10916255">mon profil LinkedIn.</a><br /><br />' +
      'Je serais tr&eacute;s heureux de discuter de sujets li&eacute;s au web (mais pas que) avec vous, donc n\'h&eacute;sitez pas &agrave; <a href="/#contact">me contacter</a>.<br />'
  }

};

const AboutMe = (): ReactElement => {
  const intl = useIntl();
  const { sanitizeHTML } = useHTMLSanitizer();
  return (
    <article id="who_am_i">
      <div className="quote">
        <h3 dangerouslySetInnerHTML={{ __html: sanitizeHTML(intl.formatMessage(messages.aboutMeHeading)) }} />
        <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(intl.formatMessage(messages.aboutMeParagraph)) }} />
      </div>
    </article>
  );
};
export default AboutMe;
