const {promisify} = require('util');
const webpack = promisify(require('webpack'));
const getConfig = require('./webpack.build.conf');

module.exports = async function (entries, report) {
  console.log('need report ', report);
  try {
	const output = entries.map(it => `[${it.name}]: ${it.value}`);
	console.log('---------modules---------');
	console.log(output.join('\n'));
	console.log('---------modules---------');
	const configs = entries.map(it => {
	  const config = {...getConfig({report})};
	  config.entry = {
		[it.name]: it.value
	  };
	  config.output = {...config.output, library: it.name};
	  return config;
	});
	const result = await webpack(configs);
	const stats = result.stats;
	const start = stats[0];
	const end = stats.slice(-1)[0];
	let time = 0;
	if (start && end) {
	  time = end.endTime - start.startTime;
	}
	console.log('build complete! used ', time + 'ms');
	return true;
  } catch (e) {
	console.log('build fail ', e);
	return null;
  }
};
