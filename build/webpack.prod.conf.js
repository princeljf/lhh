const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.conf.js');

const config = {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        
    ]
};

const prodConfig = merge(common, config);
console.log('production config = ', prodConfig);
module.exports = prodConfig;
