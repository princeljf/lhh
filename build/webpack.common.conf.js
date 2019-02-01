const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const util = require('./util.js');

const entryObj = util.getPathEntry('./src/modules', 'index.ejs');

module.exports = {
    entry: entryObj,
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../'),   //根目录
        }),
        new HtmlWebpackPlugin({
            filename: 'page1.html',
            template: 'src/modules/page1/index.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'page2.html',
            template: 'src/modules/page2/index.ejs'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {

    //         }
    //     }
    // },
    module:{
        rules:[
            {
                test: /\.css$/,//加载css
                include: path.resolve(__dirname, "../src"),
                use: [
                  'style-loader',
                  'css-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,//加载图片
                include: path.resolve(__dirname, "../src"),
                use: [
                  'file-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,//加载字体：format('woff')最佳
                include: path.resolve(__dirname, "../src/assets"),
                use: [
                  'file-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader',
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/,
            },
        ]
    }
};