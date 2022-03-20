const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    // disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
