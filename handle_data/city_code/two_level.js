var fs = require('fs');
var _  = require('lodash');
var cityInfo = fs.readFileSync('city_info.txt', 'utf8');
cityInfo = JSON.parse(cityInfo);
console.log(typeof cityInfo);


cityInfo  = cityInfo.map(ele => {
	if (ele.level == 3) return null;
	return ele;
});

cityInfo = _.compact(cityInfo);

fs.writeFile('two_level.json',JSON.stringify(cityInfo),function  (err) {
    if(err) throw err;
    console.log('write success');
});

console.log(cityInfo);