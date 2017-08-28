/* eslint-disable */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    pkg = require('../package.json')

const DIRECTORY = path.join(__dirname)

const commonLoaders = [
    {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
    }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
    }];

module.exports = [
    {
    name: "client-side rendering",
    devServer: {
        contentBase: "./web/src/client",
        publicPath: "/web/src/client",
        host: "localhost",
        port: 3000,
        hot: true,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        }
    },
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, '../index.web.js')
    ],
    module: {
        rules: commonLoaders
    },
    output: {
        path: path.join(__dirname, "./src/client/"),
        filename: 'bundle-[hash:6].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production"),
            'process.env.API_HOST': JSON.stringify("http://apptivator-service.azurewebsites.net")
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            pkg: pkg,
            template: path.join(__dirname, "../app/index.template.html")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin()
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
    },
    target: "web",
},
{
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
            test: /\.css$/, loader: "css-loader"
        }])//path.join(__dirname, "server", "style-collector") + "!css-loader" },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    cache: true
}]
