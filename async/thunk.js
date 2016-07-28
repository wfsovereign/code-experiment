var fs = require('fs');
var thunkify = require('thunkify');
var co = require('co');
var readFile = thunkify(fs.readFile);

var gen = function*() {
	var r1 = yield readFile('./data/name.txt');
	console.log(r1.toString());
	var r2 = yield readFile('./data/name.txt');
	console.log(r2.toString());
};
co(function*() {
	console.log('============');
	var r1 = yield readFile('./data/name.txt');
	console.log(r1.toString());
	var r2 = yield readFile('./data/name.txt');
	console.log(r2.toString());
});



// var g = gen();

// var r1 = g.next();
// r1.value(function(err, data){
//   if (err) throw err;
//   var r2 = g.next(data);
//   r2.value(function(err, data){
//     if (err) throw err;
//     g.next(data);
//   });
// });