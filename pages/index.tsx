import React from 'react';
import type { NextPage } from 'next';

import { Metas } from '../components/metas';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div className="cf h-100 min-h-100 bg_light">
      <Metas lang='fr' />
      <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">

        <header className="bb b--black-70 pv4">
          <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Adrien Petitjean</h3>
          <h2 className="f3 fw4 i lh-title mt0">Développeur web</h2>
          <p className="times lh-copy measure f4 mt0">
            <a className="link dim blue" href="./index-en.html" title="Version Anglaise">EN</a>
          </p>
        </header>

        <section className="pt5 pb4 ma0">
          <p className="times lh-copy measure f4 mt0">
            Toujours enthousiaste d’apprendre de nouvelles choses.
          </p>
          <p className="times lh-copy measure f4 mt0">
            Développeur de logiciel sénior @<a className="link dim blue" href="https://unity.com/" title="Unity">Unity</a>
          </p>

          <p className="times lh-copy measure f4 mt0">
            <a className="link dim blue" href="https://medium.com/@adrien.petitjean84" title="My posts">Mes articles</a>
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
