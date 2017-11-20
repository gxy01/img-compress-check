
const program = require('commander');
const package = require('./package.json');
const check = require('./app/check');


program
    .version(package.version)
    .command('*')
    .description('选择要检查的图片或路径')
    .action(check);

program.parse(process.argv);

if (!program.args.length) {
    console.error('请输入一个检测的图片路径或者文件夹');
    process.exit(1);
}
