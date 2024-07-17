const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        clean: true,
    },
    plugins: [
        new WorkboxPlugin.GenerateSW()
    ],
});
