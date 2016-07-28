


var promise = new Promise((resolve, reject) => {
	var a = 1006;
	var b = new Date();
	setTimeout(function() {
		a++;
		resolve(new Date() - b);
	}, a);
});
promise.then(function(value) { 
	console.log('0000000');
	console.log(value+'ms');
});