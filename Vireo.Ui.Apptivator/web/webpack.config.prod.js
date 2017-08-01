/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

const DIRECTORY = path.join(__dirname)

const commonLoaders = [
    { test: /\.jsx?$/, loader: "babel-loader", include: ["app", "server"] },
    { test: /\.png$/, loader: "url-loader" },
    { test: /\.jpg$/, loader: "file-loader" },
];

module.exports = [{
  //devtool : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  output: {
    filename: './dist/client/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_HOST': JSON.stringify('http://' + require('my-ip')() + ':3001/api')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web-extended',
      'native-base': 'native-base-web',
      //Icon.TabBarItem
      'react-native-vector-icons/Ionicons': 'native-base-web/lib/Components/Widgets/Icon',
      'react/lib/ReactNativePropRegistry': 'react-native-web-extended/dist/modules/ReactNativePropRegistry'
    }
  }
}, {
    // The configuration for the server-side rendering
    name: "server-side rendering",
    entry: [
        'babel-polyfill',
        //'webpack/hot/signal.js',
        "./server/entry.js"
    ],
    target: "node",
    output: {
        filename: './dist/client/server.js'
    },
    externals: [
        /^[a-z\-0-9]+$/,
        /^babel-runtime/
    ],
    module: {
        loaders: commonLoaders.concat([
            { test: /\.css$/, loader: "css-loader" }//path.join(__dirname, "server", "style-collector") + "!css-loader" },
        ])
    },
    cache: true
}]
