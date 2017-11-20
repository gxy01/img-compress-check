const sharp = require('sharp');
const fs = require('fs');
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
     sharp(path);
    // 压缩图片
}