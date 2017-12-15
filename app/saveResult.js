/**
 * @file 保存结果
 * @author gaoxueyuan@baidu.com
 */
const prompt = require('prompt');

const fs = require('fs');


function saveByName(name = 'output', result, rate) {
    const savePath = `./${name}.json`;
    const outputExists = fs.existsSync(savePath);
    if (outputExists) {
        console.log(`保存失败，${name}.json已经存在`);
        prompt.get([{
            description: '请输入保存的文件名称',
            type: 'string',
            name: 'name',
            required: true
        }], function (err, input) {
            if (err) {
                console.log('获取保存名称失败')
                return;
            }
            saveByName(input.name, result, rate);
        });
        return;
    }
    fs.writeFileSync(savePath, JSON.stringify({
        result, rate
    }));
}




module.exports = function (result, rate) {
    if (result.length === 0) {
        return;
    }
    prompt.get([{
        description: '是否保存为json格式？y/n',
        message: 'Please dont use the demo credentials',
        type: 'string',
        name: 'saveToJson',
        required: true
    }], function (err, input) {
        // 
        // Log the results. 
        // 
        if (err) {
            console.log('保存异常');
            return;
        }
        const { saveToJson } = input;
        console.log(saveToJson);
        if (saveToJson === 'y') {
            saveByName('output', result, rate);
        }
    });
}

