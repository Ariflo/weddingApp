require('babel-register');
require('dotenv-safe').load();

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:[
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, 'app/web', 'src.js'),
  ],

  output: {
    path: path.join(__dirname, 'dist/app/web'),
    publicPath: '/',
    filename: 'src.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PORT: JSON.stringify(process.env.PORT),
        API_URL: JSON.stringify(process.env.API_URL),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/react-native-config/),
    new webpack.LoaderOptionsPlugin({
      options: {
          eslint: {
              emitWarning: true,
          }
      }
    }),
  ],

  module: {
    rules: [
      {
       enforce: 'pre',
       test: /\.js$/,
       use: ['eslint-loader'],
       exclude: [/node_modules/],
     },
     {
       test: /\.js$/,
       exclude: [/node_modules/],
       use: [ {
         loader: 'babel-loader',
         query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: [['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                // this is important for Webpack HMR:
                locals: ['module']
              },
              {
                "transform": "react-transform-catch-errors",
                "imports": ["react", "redbox-react"]
              }],
            }]],
          },
        },
      ]
     },
     {
       test: /\.json$/,
       use: [
         'json-loader'
       ]
     },
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader',
       ]
     },
     {
       test: /\.scss$/,
       use: [
         'style-loader',
         'css-loader',
         {
           loader: 'postcss-loader',
           options: {
            plugins: (loader) => [
              require('postcss-flexbugs-fixes'),
              require('postcss-cssnext'),
            ]
          }
        },
         'sass-loader',
       ]
     },
     { 
       test: /\.(png|gif|jpg)$/, 
       use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
     },
    ],
  },
}
