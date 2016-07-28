function insertTradeData(iterator) {
  var validators = [],
    currentTime = new Date();
  while (iterator !== 0) {
    iterator--;
    var validator = {};
    validator.end = getEarlyNextMonth(currentTime).toLocaleString();
    validator.start = initStartMonth(currentTime).toLocaleString();
    validator.name = currentTime.getFullYear() + '年' + (currentTime.getMonth() + 1) + '月';
    validator.trades = [];
    validator.sum = 0;
    currentTime = initStartMonth(currentTime);
    currentTime.setMonth(currentTime.getMonth() - 1);
    validators.push(validator);
  }
  return validators;
}

function getEarlyNextMonth(date) {
  var d = new Date(date.getTime());
  d.setMonth(d.getMonth() + 1);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

function initStartMonth(date) {
  var d = new Date(date.getTime());
  d.setDate(1);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
}


var date = insertTradeData(3);
console.log(date);
