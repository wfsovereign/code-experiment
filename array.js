var _ = require('underscore');
var a = [1, 2, 3, 4, 5],
	b = [2, 3, 4],
	c = [2, 5];


var result = _.chain(c).filter(function(i) {
	console.log(i);
	return _.find(b, function(iB) {
		return i == iB;
	});
}).filter(function(i) {
	console.log(i);
	return _.find(a, function(ia) {
		return i == ia;
	});
}).value();
console.log(result);

var showMem = function() {
	var mem = process.memoryUsage();
	var format = function(bytes) {
		return (bytes / 1024 / 1024).toFixed(2) + ' MB';
	};
	console.log('Process: heapTotal ' + format(mem.heapTotal) +
		' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
	console.log('-----------------------------------------------------------');
};

Array.prototype.quick_sort = function() {
	var len = this.length;
	// console.log('-------------------');
	// console.log(len);
	if (len <= 1)
		return this.slice(0);
	var left = [];
	var right = [];
	var mid = [this[0]];
	for (var i = 1; i < len; i++)
		if (this[i] < mid[0])
			left.push(this[i]);
		else
			right.push(this[i]);
		// console.log(left);
		// console.log(right);
	return left.quick_sort().concat(mid.concat(right.quick_sort()));
};
console.time('timer');
var arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
for (var i = 1; i < 1000; i++) {
	showMem();
	arr.push(Math.random() * 10000 + 10);
};
arr = arr.quick_sort();
// showMem();
console.timeEnd('timer');

// showMem();



var leave = new Date(2016, 2, 5, 15);

function format () {
	setInterval(function  () {
		console.log('sugax离开倒计时：' + (leave.getTime() - new Date().getTime())/1000 + '小时') ;
	}, 1000);
}
format();















