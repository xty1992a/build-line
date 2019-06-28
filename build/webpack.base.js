/**
 * Created by TY-xie on 2018/3/26.
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
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
	  {
		test: /\.tsx?$/,
		use: ['babel-loader', 'ts-loader'],
		exclude: /node_modules/,
	  },
	],
  },
};

module.exports = ({mode, report}) => {
  const IS_DEV = mode === 'development';
  baseConfig.module.rules.push(
	  {
		test: /(\.less)$/,
		use: [
		  IS_DEV ? {loader: 'style-loader'} : MiniCssExtractPlugin.loader,
		  {loader: 'css-loader'},
		  {loader: 'postcss-loader'},
		  {loader: 'less-loader'},
		],
	  },
  );
  baseConfig.plugins = [];
  if (!IS_DEV) {
	baseConfig.plugins.push(new MiniCssExtractPlugin({
	  filename: '[name].css',
	}));
	baseConfig.optimization = {
	  minimize: true,
	  minimizer: [
		new Uglify({
		  uglifyOptions: {
			compress: {
			  drop_console: true,
			},
		  },
		}),
	  ],
	};
  }
  if (report) {
	baseConfig.plugins.push(new BundleAnalyzerPlugin());
  }
  return baseConfig;
};
