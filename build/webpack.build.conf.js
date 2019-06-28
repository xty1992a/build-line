/*
	config for build umd module to use
* */
const path = require('path');
const getBaseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const root = p => path.join(__dirname, '..', p);

module.exports = ({report}) => merge(getBaseConfig({mode: 'production', report}), {
  mode: 'production',
  entry: root('src/package/main.js'),
  output: {
	path: path.resolve(__dirname, '../lib'),
	filename: '[name].js',
	publicPath: '/',
	library: 'Sorter',
	libraryTarget: 'umd',
	libraryExport: 'default', // 需要暴露的模块
	umdNamedDefine: true,
  },
  performance: false,
  optimization: {
	minimize: true,
  },
  plugins: [],
});

