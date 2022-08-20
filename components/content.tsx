import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

interface Props {
  lang?: string
}

interface ContentElements {
  firstParagraph: {
    text: string
  }
  secondParagraph: {
    text: string
    renderLink: () => ReactElement
  }
  thirdParagraph: {
    renderLink: () => ReactElement
  }
}

// I18n
const fr: ContentElements = {
  firstParagraph: { text: 'Toujours enthousiaste d’apprendre de nouvelles choses.' },
  secondParagraph: {
    text: 'Développeur de logiciel sénior @',
    renderLink: () => <a className="link dim blue" href="https://unity.com/" title="Unity" > Unity</a>
  },
  thirdParagraph: {
    renderLink: () => <a className="link dim blue" href="https://medium.com/@adrien.petitjean84" title="Mes articles">Mes articles</a>
  }
};

const en: ContentElements = {
  firstParagraph: {
    text: 'I am always enthusiastic about learning new stuffs.'
  },
  secondParagraph: {
    text: 'Senior software developer @',
    renderLink: () => <a className="link dim blue" href="https://unity.com/" title="Unity" > Unity</a>
  },
  thirdParagraph: {
    renderLink: () => <a className="link dim blue" href="https://medium.com/@adrien.petitjean84" title="My Posts">My posts</a>
  }
};

const Content = ({ lang }: Props): ReactElement => {
  const { firstParagraph, secondParagraph, thirdParagraph }: ContentElements = lang === 'en' ? { ...en } : { ...fr };
  return (
    <section className="pt5 pb4 ma0">
      <p className="times lh-copy measure f4 mt0">
        {firstParagraph.text}
      </p>
      <p className="times lh-copy measure f4 mt0">
        {secondParagraph.text}{secondParagraph.renderLink()}
      </p>

      <p className="times lh-copy measure f4 mt0">
        {thirdParagraph.renderLink()}
      </p>
    </section>

  );
};
Content.defaultTypes = {
  lang: 'fr'
};

Content.propTypes = {
  lang: PropTypes.oneOf(['fr', 'en'])
};

export default Content;
