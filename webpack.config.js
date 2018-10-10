let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    webpack = require("webpack"),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        first: './static/src/base.js',
        second: './static/src/app/app.js'
    },
    output: {
        path: path.resolve(__dirname, './static/build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        require('autoprefixer'),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
};
