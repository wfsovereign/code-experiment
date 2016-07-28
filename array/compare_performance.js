var _ = require('lodash');

var testArray = [],
  i = 0;
console.time('start');
while (i < 10000000) {
  testArray.push({
    id: i,
    content: 'this is ' + i
  });
  i++;
}

console.time('1-----------');
testArray.forEach(ele => {
  console.log(ele.id + ' ' + ele.content);
});
console.timeEnd('1-----------');

console.time('2-------');
_(testArray).forEach(function(ele) {
  console.log(ele.id + ' ' + ele.content);
});
console.timeEnd('2-------');
console.timeEnd('start');