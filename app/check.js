const fs = require('fs');
const { promisify } = require('util');
const fsStat = promisify(fs.stat);

const compressImg = require('./copmressImg.js');

async function check(path) {
    fs.stat(path)
    const stats = await fsStat(path);
    if (stats.isDirectory()) {

    }
    if (stats.isFile()) {
        compressImg(path);
    }
    console.log(stats.size);
}

module.exports = check;