const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
});
