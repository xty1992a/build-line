/*
config fro development packages
* */
const path = require('path');
const webpack = require('webpack');
const getBaseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = p => path.join(__dirname, '..', p);

module.exports = () => merge(getBaseConfig({mode: 'development', report: false}), {
  mode: 'development',
  entry: {
	app: root('src/demo.js'),
  },
  devServer: {
	contentBase: path.resolve(__dirname, '..'),
	compress: true,
	hot: true,
	port: 8080,
	host: 'localhost',
	publicPath: '/',
	disableHostCheck: true,
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
	  filename: 'index.html',
	  template: 'index.html',
	  inject: true,
	  hash: true,
	}),
  ],
});
