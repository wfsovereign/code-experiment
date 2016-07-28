var co = require('co');

var test = co.wrap(function  *(o) {
	function async () {
		setTimeout(function  () {
			console.log('hahahahaha');
		}, 1000);
	}
	console.log('----- param: ', o);
	yield async();
	console.log(' this point');
	console.log(o);
});




var test2 = co.wrap(function  *() {
	yield test('hello');
	console.log('test2 end');
});

test2();
