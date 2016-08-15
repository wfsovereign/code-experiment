var isPay = true;

function showPrice(num) {
  if (!num) return '0.00';
  console.log('1 :', num);
  num = parseFloat(num);
  console.log('2 :', num);
  if (isNaN(num)) return '0.00';
  if (num > 0 && num < 1) return num.toFixed(2);
  console.log('3 :', num);
  var cache = num.toFixed(2).toString().split('.'),
    length = cache[0].split('').length;
  var integerStr = cache[0].split('').reverse().map((ele, index) => {
    if ((parseInt(index) + 1) % 3 === 0 && parseInt(cache[0]) >= 1000 && (index + 1) != length) ele = ',' + ele;
    return ele;
  }).reverse().join('');
  return isPay ? "-" : "" + [integerStr, cache[1]].join('.');
}

var defaultPrice = '0.00';
function test(value) {
  return ((num) => {
    if (!num) return defaultPrice;
    num = parseFloat(num);
    if (isNaN(num)) return defaultPrice;
    if (num > 0 && num < 1) return (isPay ? "-" : "") + num.toFixed(2);
    var cache = num.toFixed(2).toString().split('.'),
      length = cache[0].split('').length;
    var integerStr = cache[0].split('').reverse().map((ele, index) => {
      if ((parseInt(index) + 1) % 3 === 0 && parseInt(cache[0]) >= 1000 && (index + 1) != length) ele = ',' + ele;
      return ele;
    }).reverse().join('');
    return (isPay ? "-" : "") + [integerStr, cache[1]].join('.');
  })(value);
}




console.log(test(100000));
console.log(test(100000.001));
console.log(test(100000.009));
console.log(test('obj'));
console.log(test('-'));
console.log(test('0'));
