#!/bin/sh -ue
export NODE_ENV=production
webpack --config webpack.app.config.prod.js
#cp -R ./public/* ./dist
cp ./app/web/public/favicon.ico ./dist/
cp ./app/web/public/index.html ./dist/app/index.html