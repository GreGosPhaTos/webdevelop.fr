import React from 'react';
import type { NextPage } from 'next';
import { MainContainer } from '../components/main-container';

const Home: NextPage = () => {
  return <MainContainer locale="en" errorPage="404" />;
};

export default Home;
