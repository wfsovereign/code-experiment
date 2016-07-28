function generateTimestampFileName() {
  var currentTime = new Date();
  return 'V' + currentTime.getFullYear() +
    additionDigitZero(currentTime.getMonth() + 1) +
    additionDigitZero(currentTime.getDate()) +
    generateMantissaByHour(currentTime);

  function additionDigitZero(str) {
    if (str >= 10) return str;
    else return "0" + str;
  }

  function generateMantissaByHour(c) {
    var randomNum = Math.floor((Math.random() * 899999) + 100000),
      rate = 0.7;
    if (randomNum < 200000) randomNum = (200000 - randomNum) + randomNum + 99;

    return Math.floor(randomNum * ((c.getHours() + c.getMinutes()/60) / 100 + rate));
  }
}
