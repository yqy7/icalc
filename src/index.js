const commander = require('commander');
const numeral = require('numeral');
const version = require('../package.json').version;

commander
    .version(version)
    .arguments('<expr>')
    .description('Example: icalc -m -x -b \'0x9*(8+0b100)\'')
    .option('-b,--binary', "convert result to binary format")
    .option('-x,--hex', "convert result to hex format")
    .option('-m,--byte', 'convert result to byte format')
    .action((expr, options) => {
        let result = eval(expr), resultStr = expr + '=' + result, binaryResult, hexResult, byteResult;

        if(options.binary) {
            binaryResult = '0b' + result.toString(2);
            resultStr += '=' + binaryResult;
        }
        
        if (options.hex){
            hexResult = '0x' + result.toString(16);
            resultStr += '=' + hexResult;
        }

        if(options.byte) {
            byteResult = numeral(result).format('0.0b');
            resultStr += '≈' + byteResult;
        }
        
        console.log(resultStr);
    });

commander.parse(process.argv); // 解析参数
