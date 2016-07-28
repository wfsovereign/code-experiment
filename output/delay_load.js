'use strict';
const test = require('./exec');
console.log('msg ---');
console.log(test.msg);
setTimeout(function() {
  console.log('delay -----');
  var s = require('./delay_load');
  console.log(s);
  console.log(Object.keys(s));

  console.log(require('./exec').msg);
  console.log(test.msg);
}, 1000);
