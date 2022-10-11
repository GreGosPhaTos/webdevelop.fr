import React from 'react';
import type { NextPage } from 'next';

import { Metas } from '../components/metas';
import Footer from '../components/footer';
import Header from '../components/header';
import Content from '../components/content';
import { Moon } from '../components/moon';

const HomeEN: NextPage = () => {
  return (
    <div className="cf h-100 min-h-100">
      <Moon />
      <Metas lang='en' />
      <div className="flex flex-column h-100 fl ma0 pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
        <Header lang='en' />
        <Content lang='en' />
        <Footer />
      </div>
    </div>
  );
};

export default HomeEN;
