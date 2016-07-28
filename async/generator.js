var co = require('co');

var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

co(function* (){
  var f1 = yield readFile('./data/name.txt');
  var f2 = yield readFile('./data/name.txt');
  console.log(f1.toString());
  console.log('------------');
  console.log(f2.toString());
  return f2;
}).then(function(value) {
	console.log('then');
	console.log(value.toString());
});



