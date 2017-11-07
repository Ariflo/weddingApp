require('babel-register');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:[path.join(__dirname, '/app/web', 'src.js')],

  output: {
    path: path.join(__dirname, '/app/web'),
    publicPath: '/',
    filename: 'src.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PORT: JSON.stringify(process.env.PORT),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [
     {
       test: /\.js$/,
       exclude: [/node_modules/],
       use: [ {
         loader: 'babel-loader',
         query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['lodash'],
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
