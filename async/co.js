var co = require('co');


var promise = new Promise(function (resolve, reject) {
    return resolve(1);
});

//function testAsynchronous() {
//    console.log('begin');
//    return function *() {
//        console.log('what?');
//        var a = yield promise.then(function (value) {
//            return value
//        });
//        console.log('------');
//        console.log(a);
//        return a;
//    };
//}
//
//testAsynchronous()();
//
//
//co(function *() {
//    // yield any promise
//    var result = yield Promise.resolve(true);
//
//    console.log('=====');
//    console.log(result);
//}).catch(function (err) {
//    console.log(err);
//});


//var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//a.forEach(co.wrap(function *(ele, index) {
//        console.log(ele);
//        console.log(yield Promise.resolve(1));
//}));
//
//var fn = co.wrap(function* (val) {
//    return yield Promise.resolve(val);
//});
//
//fn(true).then(function (val) {
//    console.log('fn');
//    console.log(val);
//});
//




function sleepRandom() {
    return new Promise(function(resolve) {
        var ms = Math.floor(Math.random() * 500);
        console.log(ms);
        console.log('----');
        setTimeout(resolve.bind(this, ms), ms); // Promise的返回值就是sleep的毫秒数
    });
}

console.log(sleepRandom());