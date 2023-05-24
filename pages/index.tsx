import React from 'react';
import type { NextPage } from 'next';

import { MainContainer } from '../components/main-container';

const Home: NextPage = () => {
  return (
    <MainContainer locale='fr' />
  );
};

export default Home;
