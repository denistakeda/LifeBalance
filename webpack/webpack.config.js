/**
 * webpack.config.js
 *
 * process.env.NODE_ENV is used to determine to return production config or not (an array with both browser and server config)
 * if not, env is used to determine to return browser-rendering config (for hot module replacement) or server-side rendering config (for node)
 * env is a string passed by "webpack --env" on command line or calling this function directly
 * if env contains substring 'browser', then returns browser-rendering config, otherwise server-rendering config
 *
 * NOTE: browser/server is client/server-side rendering respectively in universal/isomorphic javascript
 *
 */
const fs = require('fs');
const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const externals = require('./externals');
const resolve = require('./resolve');

module.exports = (env = '') => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isBrowser = (env.indexOf('browser') >= 0);
  console.log(`Running webpack in ${process.env.NODE_ENV} mode on ${isBrowser ? 'browser': 'server'}`);

  const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  const node = { __dirname: true, __filename: true };

  const prodServerRender = {
    devtool: 'source-map',
    context: PATHS.app,
    entry: { server: '../src/server/index' },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve,
    plugins: plugins({ production: true, browser: false })
  };

  const devServerRender = {
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: '../src/server/index' },
    target: 'node',
    node,
    externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].dev.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2',
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve,
    plugins: plugins({ production: false, browser: false })
  };

  const prodConfig = [prodServerRender];
  const devConfig = devServerRender;
  const configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};

