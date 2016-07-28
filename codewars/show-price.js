function showPrice(num) {
  if (!num) return false;
  num = parseInt(num);
  if (num == NaN) return false;
  num = num.toFixed(1);
  var cache = ('' + num).split('.');
  var length = cache[0].split('').length;
  var integerStr = cache[0].split('').reverse().map((ele, index) => {
    console.log(ele, ' ', index);
    if ((parseInt(index) + 1) % 3 === 0 && cache[0] >= 1000 && (index+1) != length) ele = ',' + ele;
    return ele;
  }).reverse().join('');

  console.log('result ', [integerStr, cache[1]].join('.'));

}


showPrice(100000)
