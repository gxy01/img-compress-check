const fs = require('fs');
const { promisify } = require('util');
const fsReadFile = promisify(fs.readFile);
const compress = require('./compressBuffer');
/**
 * 
 * @param {stirng} path 图片路径，仅支持.png 
 */
module.exports = async function (path) {
    // 验证文件后缀名
    if (!path.match(/.(png)$/i)) {
        return {
            error: 4000
        }
    }
    const fileBuffer = await fsReadFile(path);
    const imgBuffer = await compress(fileBuffer);
    const rawSize = fileBuffer.byteLength;
    const compressSize = imgBuffer.byteLength;
    // 压缩图片    
    return {
        path,
        rawSize,
        compressSize,
        rate: compressSize / rawSize
    }
}