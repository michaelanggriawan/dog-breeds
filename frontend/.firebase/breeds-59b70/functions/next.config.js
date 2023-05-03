"use strict";

// next.config.js
var { PHASE_PRODUCTION_BUILD } = require("next/constants");
var config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["src", "__tests__", "mocks", "__mocks__"]
  },
  env: {
    API_URL: "https://dog-breeds-production-325d.up.railway.app/v1/"
  }
};
module.exports = (phase) => {
  switch (phase) {
    case PHASE_PRODUCTION_BUILD: {
      const withBundleAnalyzer = require("@next/bundle-analyzer")({
        enabled: process.env.ANALYZE === "true"
      });
      return withBundleAnalyzer(config);
    }
    default:
      return config;
  }
};
