function generateStart2EndIsotime(start, end) {
  var isotime = [];
  var startTime = new Date(start),
    endTime = new Date(end);
  while (startTime <= endTime) {
    isotime.push(new Date(startTime.getTime()).toISOString());
    startTime.setDate(startTime.getDate() + 1);
  }
  return isotime;
}

var isotime = generateStart2EndIsotime('2016-09-01', '2016-09-07');
console.log(isotime.toString());
