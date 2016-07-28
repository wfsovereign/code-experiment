const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
	input: fs.createReadStream('./data/table_column.txt'),
	output: process.stdout
});
var column = [];
rl.on('line', function(line) {
	console.log(line);
	column.push(line.trim());

	// console.log(typeof line);
}).on('close',() => {
	console.log(JSON.stringify(column));	
});

