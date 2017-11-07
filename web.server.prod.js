/* eslint-disable no-console */

const compression = require('compression');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();

const PORT = process.env.PORT;

app.use((req, resp, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return resp.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
});


app.use(compression());
app.use(favicon(`${__dirname}/dist/favicon.ico`));

app.use('/', (req, res, next) => {
  express.static(`${__dirname}/dist/app`)(req, res, next);
});

app.get('*', function (req, res, next) {
  res.sendFile('index.html'));
});

app.listen(PORT, err => {
  if (err) {
    console.error(`Error starting server: ${err}`);
    return;
  }
  console.log('Server is listening');
});
