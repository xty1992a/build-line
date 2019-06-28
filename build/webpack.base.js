/**
 * Created by TY-xie on 2018/3/26.
 */
const path = require('path');

const baseConfig = {
    resolve: {
        extensions: ['.js'],
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name]/utils.js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /(\.jsx?)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /(node_modules)/,
            },
        ],
    },
};

module.exports = baseConfig;
