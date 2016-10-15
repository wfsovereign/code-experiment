
var	fs = require('fs');
var path = require('path');

var currentPath = __dirname;

var	currentFilePath = fs.readdirSync(currentPath);

console.log('path : ', currentFilePath);
console.log('cuurent : ', currentPath)

fs.mkdirSync(path.join(currentPath, '/test'))
fs.renameSync(path.join(currentPath, 'test1.js'), path.join(currentPath, '/test/test1.js'));

currentFilePath.forEach(ele =>{
	var fileSplit = ele.split('.'), fileType = fileSplit[1], filePrefix = fileSplit[0];
	var underlineIndex = filePrefix.indexOf('_');
	if (underlineIndex > -1 && filePrefix[underlineIndex + 1] && (filePrefix[underlineIndex + 1] >= 'a' || filePrefix[underlineIndex + 1] <= 'z'|| filePrefix[underlineIndex + 1] >= 'A'|| filePrefix[underlineIndex + 1] <= 'Z') ) {
			filePrefix = filePrefix.slice(0, underlineIndex) + filePrefix[underlineIndex + 1].toUpperCase() + filePrefix.slice(underlineIndex + 2, filePrefix.length);
	}
	fs.renameSync(path.join(currentPath,ele), path.join(currentPath, [filePrefix, fileType].join('.')));
});

var waiteCreateDir = [];
currentFilePath.forEach(ele => {
  if (ele.indexOf('change') > -1) return;
  if (waiteCreateDir.indexOf(ele.split('@')[0]) === -1) waiteCreateDir.push(ele.split('@')[0]);
});

waiteCreateDir.forEach(ele => {
  fs.mkdirSync(path.join(currentPath, ele));
})

// console.log('success!');