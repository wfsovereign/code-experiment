var _ = require('lodash');
var fs = require('fs');

var showMem = function() {
    var mem = process.memoryUsage();
    var format = function(bytes) {
        return (bytes / 1024 / 1024).toFixed(2) + ' MB';
    };
    console.log('Process: heapTotal ' + format(mem.heapTotal) +
        ' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
    console.log('-----------------------------------------------------------');
};

var count = 0;
var cityCode = fs.readFileSync('./data/handle_standard_city.json');

console.log(typeof cityCode);

cityCode = JSON.parse(cityCode);

var result = getSubordinateCode(120000, true);
console.log(result);

console.log('===========2016年01月14日00:03:40');

console.log(getSubordinateCodeRange('120000'));



function getSubordinateCodeRange(code) {
    var codeObj = _.find(cityCode, (item) => {
        return item.code == code;
    });
    if (!codeObj) return false;
    if (!codeObj.has_child) return code;
    var index = _.findLastIndex(code, (chr) => {
        return chr != '0';
    });
    var head = code.substr(0,index+1);
    var validatorCodes = _.filter(cityCode, (item) => {
        return item.code.startsWith(head);
    });
    return validatorCodes.reduce((pre,cur) => {
        pre.push(cur.code);
        return pre;
    },[]);
}



function getSubordinateCode(code, isDeep) {
    var codes = [];
    var codeObj = _.find(cityCode, (item) => {
        return item.code == code;
    });
    if (!codeObj) return false;
    if (!codeObj.has_child) return code;
    codes = iterator(code, isDeep);


    codes = _.compact(_.flatten(codes));
    return codes;

    function iterator(code, isDeep) {
        count++;
        var codes = [];
        _.forEach(cityCode, (item) => {
            showMem();

            console.log(item.parent_code);
            console.log(code);
            console.log('========');
            // if (count == 5) process.exit(1);
            if (item.parent_code == code) {
                codes.push(item.code);
                if (isDeep && item.has_child != 0 && item.parent_code != item.code) codes.push(iterator(item.code, isDeep));
            }
        });
        return codes;
    }
}