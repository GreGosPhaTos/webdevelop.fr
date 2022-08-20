import React from 'react';
import type { NextPage } from 'next';

import { Metas } from '../components/metas';
import Footer from '../components/footer';
import Header from '../components/header';
import Content from '../components/content';

const Home: NextPage = () => {
  return (
    <div className="cf h-100 min-h-100 bg_light">
      <Metas lang='fr' />
      <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
