
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const util = require('./util.js');
const MODE = process.env.NODE_ENV;//development、production

const entryObj = util.getPathEntry('./src/modules', 'index.ejs');

const config = {
    entry: entryObj,
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].js'
    },
    mode: 'development',
    devtool: 'inline-source-map',//development
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        publicPath:'/',
        host: "127.0.0.1",
        port: "8089",
        overlay: true, // 浏览器页面上显示错误
        // open: true, // 开启自动打开浏览器
        // stats: "errors-only", //stats: "errors-only"表示只打印错误：
        hot: true // 开启热更新
    },
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,//加载css
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,//加载图片
                use: [
                  'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,//加载字体：format('woff')最佳
                use: [
                  'file-loader'
                ]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader',
                exclude: /node_modules/,
            },
        ]
    }
};
const moduleArr = util.getPathDirectory('./src/modules');
// console.log('moduleArr = ', moduleArr, '\n entryObj = ', entryObj);
moduleArr.map((moduleName)=>{

});
module.exports = config;