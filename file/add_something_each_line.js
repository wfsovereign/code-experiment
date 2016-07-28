const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
	input: fs.createReadStream('./data/tmp.txt'),
	output: process.stdout
});
var column = [];
rl.on('line', function(line) {
  if (line){
    // console.log(line);
    console.log('-----------');
    var enhanceLine = "<p>" + line + "</p>"
    column.push(enhanceLine);
  }

	// column.push(line.trim());

	// console.log(typeof line);
}).on('close',() => {
	console.log(JSON.stringify(column));

  var result = column.join(' ');
  console.log(result);

});
