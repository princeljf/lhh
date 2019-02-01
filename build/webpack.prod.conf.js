const merge = require('webpack-merge');
const common = require('./webpack.common.conf.js');

const config = {
    mode: 'production',
};

module.exports = merge(common, config);