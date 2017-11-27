
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const fsStat = promisify(fs.stat);
const fsReaddir = promisify(fs.readdir);

const compressImg = require('./copmressImg.js');

const blackList = ['node_modules'];

async function check(inputPath, rate = 0.5) {
    console.log('找寻路径是：', inputPath);
    console.log('过滤压缩比（小于）：', rate);
    const imgs = [];
    await findImg(inputPath, imgs);
    console.log('共找到：', imgs.length, '张图片');
    const result = [];
    console.log('压缩中...');
    for (let i = 0; i < imgs.length; i++) {
        const imgResult = await compressImg(imgs[i]);
        result.push(imgResult);
    }
    const filterArr = result.filter(img => img.rate < Number(rate));
    console.log('共', filterArr.length, '张图片可能是未压缩');
    console.log(filterArr);
    return result;
}

async function findImg(inputPath, imgs) {
    const stats = await fsStat(inputPath);
    if (stats.isDirectory()) {
        const files = await fsReaddir(inputPath);
        for (let i = 0; i < files.length; i++) {
            if (blackList.indexOf(files[i]) < 0) {
                await findImg(path.join(inputPath, files[i]), imgs);
            }
        }
    }
    if (stats.isFile() && /\.(png|jpg|jpeg)$/.test(inputPath)) {
        imgs.push(inputPath);
    }
}

module.exports = check;