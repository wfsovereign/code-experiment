
var	fs = require('fs');
var path = require('path');

var currentPath = __dirname;

var	currentFilePath = fs.readdirSync(currentPath);

console.log('path : ', currentFilePath);

currentFilePath.forEach(ele =>{
	var fileSplit = ele.split('.'), fileType = fileSplit[1], filePrefix = fileSplit[0];
	var underlineIndex = filePrefix.indexOf('_');
	if (underlineIndex > -1 && filePrefix[underlineIndex + 1] && (filePrefix[underlineIndex + 1] >= 'a' || filePrefix[underlineIndex + 1] <= 'z'|| filePrefix[underlineIndex + 1] >= 'A'|| filePrefix[underlineIndex + 1] <= 'Z') ) {
			filePrefix = filePrefix.slice(0, underlineIndex) + filePrefix[underlineIndex + 1].toUpperCase() + filePrefix.slice(underlineIndex + 2, filePrefix.length);
	}
	fs.renameSync(path.join(currentPath,ele), path.join(currentPath, [filePrefix, fileType].join('.')));
});

console.log('success!');