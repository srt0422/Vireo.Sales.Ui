/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json');

const DIRECTORY = path.join(__dirname)

const commonLoaders = [
    { test: /\.jsx?$/, loader: "babel-loader", include: ["app", "server"] },
    { test: /\.png$/, loader: "url-loader" },
    { test: /\.jpg$/, loader: "file-loader" },
];

module.exports = [
        {
        name: "client-side rendering",
        devtool: 'cheap-eval-source-map',
        devServer: {
            contentBase: "./web/src/client",
            publicPath: "./web/src/client",
            host: "localhost",
            port: 3080,
            inline: true,
            hot: true,
            watchOptions: {
                aggregateTimeout: 300,
                //poll: 500
            }
        },
        entry: [
            'babel-polyfill',
            'whatwg-fetch',
            path.join(__dirname, '../index.web.js')
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
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
            filename: 'bundle.js',
            path: path.resolve(__dirname, "src/client")
            //,
            //libraryTarget: 'commonjs'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                'process.env.API_HOST': JSON.stringify('http://localhost:3001/api')
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                pkg: pkg,
                template: path.join(__dirname, "../app/index.template.html")
            }),
            new webpack.optimize.OccurrenceOrderPlugin()
        ],
        resolve: {
            alias: {
                'react-native': 'react-native-web-extended',
                'native-base': 'native-base-web',
                //Icon.TabBarItem
                'react-native-vector-icons/Ionicons': 'native-base-web/lib/Components/Widgets/Icon',
                'react/lib/ReactNativePropRegistry': 'react-native-web-extended/dist/modules/ReactNativePropRegistry'
            },
            extensions: [".jsx", ".js", ".web.js", ".gif", ".jpeg", ".png", ".svg"]
        }
    }, 
    {
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
            loaders: commonLoaders.concat([
                { test: /\.css$/, loader: "css-loader" }//path.join(__dirname, "server", "style-collector") + "!css-loader" },
            ])
        },
        cache: true
    }]
