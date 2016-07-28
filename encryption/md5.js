

var  md5 = require('md5');
var uuid = require("uuid");
var u2 = require('node-uuid');
var jwt = require('jsonwebtoken');


var token = u2.v4();
var sToken = jwt.sign({token:token},'secret');
var st = jwt.verify(sToken,'secret');
console.log(token);
console.log(sToken);
console.log('--------------');
console.log(jwt.sign({token:token},'secret'));
console.log('--------------');
console.log(st);

console.log(uuid.v4());
console.log(md5(new Date()));

console.log('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6ImI5ZTU4MGI3LTQ5MzQtNDU5MS1iOGMxLTQ2MDVjYmI4N2MyZCIsImlhdCI6MTQ0OTU2MjE1MH0.pY_lGHEmOeBUpMy_eI5MvzZrIlTGEKK9FOZXtc2Y0hU'.length);


console.log('2016年01月29日11:09:35');
console.log(md5('123'));

var sail = 'ef149b'
sail = md5(new Date).substr(0, 6);
var pwd = md5('picbling001');
var pass = md5(md5(pwd) + sail);
console.log('2016年03月24日10:35:56');
console.log(pass);
console.log(sail);


console.log('2016年04月07日10:59:07');
console.log(md5('111111'));
