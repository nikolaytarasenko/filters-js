const path = require('path');
// подключаем плагин для генерации html в dist
const HTMLPlugin = require('html-webpack-plugin');
// подключаем плагин для того, чтобы стили были в одном файле css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин для минификации js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({})
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    // используем подключенные плагины
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    // подключаем css лоадер
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};