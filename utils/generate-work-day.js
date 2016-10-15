var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;


function getDate (date) {
    var dateStr = date.getFullYear() + "-" + addDigital(date.getMonth() + 1) + "-" + addDigital(date.getDate());
    return dateStr;

    function addDigital(value) {
      value = +value;
      if (value < 10) return "0" + value;
      else return "" + value;
    }

}

function isWorkingDay(count) {
  var isWorkingDay = count % 3 === 0;
  return (isWorkingDay ?'上班' : '休息');
}

var currentDay = new Date(), count = 3;
currentDay.setDate(currentDay.getDate() - 1);

var table = `|  时间  |  工作 | \n | :---------- | :------: | \n`;

for (var i = 0; i < 200; i++) {
  table += `| ${getDate(currentDay)} | ${isWorkingDay(count)} | \n`;
  count++;
  currentDay.setDate(currentDay.getDate() + 1);
}

console.log('table : ' , table);


exec(`echo "${table}" >> workingDay.md`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
