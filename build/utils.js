const {promisify} = require('util');
const glob = promisify(require('glob'));

module.exports = {
    async getEntries() {
        try {
            const files = await glob('./src/modules/*.js')
            return files.map(it => ({name: it.match(/\/(\w+)\.js$/)[1], value: it}))
        } catch (e) {
            return []
        }
    }
};
