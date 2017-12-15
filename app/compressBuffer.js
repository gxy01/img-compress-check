
const path = require('path');

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');



module.exports = buffer => {
    return imagemin.buffer(buffer, {
        plugins: [
            imageminJpegtran(),
            imageminPngquant()
        ]
    });
}