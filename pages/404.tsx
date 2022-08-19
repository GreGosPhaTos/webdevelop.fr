import React from 'react';
import type { NextPage } from 'next';

import { Metas } from '../components/metas';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <div className="cf h-100 min-h-100 bg_light">
      <Metas lang='fr' />
      <Head>
        <title>Page non trouvée</title>
      </Head>
      <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">

        <Header />
        <section className="pt5 pb4 ma0">
          <p className="times lh-copy measure f4 mt0">
            Page non trouvée
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
