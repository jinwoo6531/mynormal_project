// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Home from '@/components/Home/Home';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>MyNormal 프론트엔드 과제 테스트</title>
        <meta name='description' content='MyNormal 프론트엔드 과제 테스트' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
