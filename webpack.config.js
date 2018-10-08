let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    webpack = require("webpack"),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './static/src/base.js',
    output: {
        path: path.resolve(__dirname, './static/build'),
        filename: 'main.js'
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
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader', 'sass-loader']
                    })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        require('autoprefixer'),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
};
