const fs = require('fs');
const path = require('path');

const [NODE, SCRIPT, ...params] = process.argv;
console.log('params is ', params);
fs.writeFile(`/code/pro/data/${Date.now()}.json`, JSON.stringify({params}), (e, r) => {
    console.log(e, r, 'write done');
})
