var crypto = require('crypto');
var fs = require('fs');
var bob = crypto.createECDH('secp256k1');
var jwt = require('jsonwebtoken');
var secret = 'wfsovereign';

var shasum = crypto.createHash('sha512').update('picbling, I want you!').digest('hex');
// console.log(shasum);

var v2 = crypto.createHash('sha256').update('alice', 'utf8').digest('hex');
var v3 = bob.generateKeys();

var result = jwt.sign(shasum, secret);


// console.log(v2);
// console.log(v3);
console.log('--------------');

// console.log(result);
// console.log(result.length);
var t = '9e0bba11-eb37-4db8-86f5-4cfb6ca6d71d';
var secret = 'secret';

console.log('2016年04月01日14:28:44');
console.log(jwt.sign(t, secret, {
  expiresIn: '30d'
}));

var token = 'eyJhbGciOiJIUzI1NiJ9.Y2MzYWFjZTMtMWNkYi00NWJhLTlhOTgtNmE5NGQzOWE0M2Mz.PqiG82rxZVKWwioJ4mZ-qKPS99SC0DnSmMNAa2OJZjY';
console.log('2016年02月29日17:35:34');
console.log(jwt.verify(token), 'secret');
