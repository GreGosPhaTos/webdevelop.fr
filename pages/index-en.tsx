import React from 'react';
import type { NextPage } from 'next';

import { Metas } from '../components/metas';
import Footer from '../components/footer';
import Header from '../components/header';

const HomeEN: NextPage = () => {
  return (
    <div className="cf h-100 min-h-100 bg_light">
      <Metas lang='en' />
      <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">

        <Header lang='en' />

        <section className="pt5 pb4 ma0">
          <p className="times lh-copy measure f4 mt0">
            I am always enthusiastic about learning new stuffs.
          </p>

          <p className="times lh-copy measure f4 mt0">
            Senior software developer @<a className="link dim blue" href="https://unity.com/" title="Unity">Unity</a>
          </p>

          <p className="times lh-copy measure f4 mt0">
            <a className="link dim blue" href="https://medium.com/@adrien.petitjean84" title="My posts">My posts</a>
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default HomeEN;
