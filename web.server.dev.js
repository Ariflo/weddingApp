/* eslint-disable no-console */

const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const appConfig = require('./webpack.app.config.dev.js');

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const app = express();

function mountApp(app, config) {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false,
    },
  }));

  app.use(webpackHotMiddleware(compiler, { log: console.log }));
}

app.use(favicon(`${__dirname}/app/web/public/favicon.ico`));

mountApp(app, appConfig);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/web/public', 'index.html'));
});

app.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    console.log(`💔 ${err}`);
    return;
  }
  console.log(`❤️ App is now running on http://${HOSTNAME}:${PORT}`);
});
