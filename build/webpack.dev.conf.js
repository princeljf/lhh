
const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.conf.js');
const util = require('./util.js');

const MODE = process.env.NODE_ENV;//development、production

const config = {
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            
        ]
    }
};


const moduleArr = util.getPathDirectory('./src/modules');
// console.log('moduleArr = ', moduleArr, '\n entryObj = ', entryObj);
moduleArr.map((moduleName)=>{
    
});

module.exports = merge(common, config);