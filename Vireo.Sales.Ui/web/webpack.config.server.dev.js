/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json');

const DIRECTORY = path.join(__dirname)

const commonLoaders = [{
    test: /\.jsx?$/,
    loader: "babel-loader",
    include: ["app", "server"]
  },
  {
    test: /\.png$/,
    loader: "url-loader"
  },
  {
    test: /\.jpg$/,
    loader: "file-loader"
  },
];

module.exports = [{
  // The configuration for the server-side rendering
  name: "server-side rendering",
  entry: [
    //'babel-polyfill',
    //'webpack/hot/signal.js',
    "./server/entry.js"
  ],
  target: "node",
  output: {

    filename: "./web/src/server/server.js",
    libraryTarget: 'commonjs' //!!! DO NOT REMOVE THIS !!! IMPORTS BREAK IN SERVER CODE WITHOUT THIS SETTING
  },
  externals: [
    /^[a-z\-0-9]+$/,
    /^babel-runtime/
  ],
  module: {
    loaders: commonLoaders.concat([{
        test: /\.css$/,
        loader: "css-loader"
      } //path.join(__dirname, "server", "style-collector") + "!css-loader" },
    ])
  },
  cache: true
}];
