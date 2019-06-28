const fs = require('fs');
const {promisify} = require('util');
const path = require('path');

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

async function createVueComponent({name, className}) {
    try {
        console.log(name, className);
        let file = await readFile(path.resolve(__dirname, './vue'), 'utf-8');
        file = file.replace(/\$name\$/g, name).replace(/\$className\$/g, className);
        console.log(file);

        const result = await writeFile(path.resolve(__dirname, `./${name}.vue`), file, 'utf-8');
        return result
        return file
    } catch (e) {
        console.log('error ', e);
        return null
    }
}

module.exports = {
    createVueComponent
}
