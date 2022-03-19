import Head from 'next/head';
import React from 'react';

const HeadComponent = () => {
  return (
    <Head>
      <title>Mon Français</title>
      <meta
        name="description"
        content="A silly platform made to let me better learn French"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
