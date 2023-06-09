/* eslint-disable @typescript-eslint/no-var-requires, global-require */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type{import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src', '__tests__', 'mocks', '__mocks__'],
  },
  env: {
    API_URL: 'https://dog-breeds-production-325d.up.railway.app/v1/',
  },
};

module.exports = (phase) => {
  switch (phase) {
    case PHASE_PRODUCTION_BUILD: {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      });

      return withBundleAnalyzer(config);
    }

    default:
      return config;
  }
};
