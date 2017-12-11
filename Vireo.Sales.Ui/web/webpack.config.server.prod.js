/* eslint-disable */
const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  pkg = require('../package.json')

const DIRECTORY = path.join(__dirname)

const commonLoaders = [{
  test: /\.(gif|jpe?g|png|svg)$/,
  loader: 'url-loader',
  query: {
    name: '[name].[hash:16].[ext]'
  }
}, {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    cacheDirectory: true
  }
}];

module.exports = [{
  // The configuration for the server-side rendering
  name: "server-side rendering",
  entry: [
    'babel-polyfill',
    //'webpack/hot/signal.js',
    "./server/entry.js"
  ],
  target: "node",
  output: {
    filename: './web/src/server/server.js',
    libraryTarget: 'commonjs'
  },
  externals: [
    /^[a-z\-0-9]+$/,
    /^babel-runtime/
  ],
  module: {
    loaders: commonLoaders.concat([{
      test: /\.css$/,
      loader: "css-loader"
    }]) //path.join(__dirname, "server", "style-collector") + "!css-loader" },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      "process.env.GMAIL_PASS": JSON.stringify('cxgskhqaoaqpnqzj')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  cache: true
}];
