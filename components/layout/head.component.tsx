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
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
