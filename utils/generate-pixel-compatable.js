var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
function generatePixelCompatableByBasePixel(base) {
  var maxPixel = 500, res = '';
  for (var i = 0; i < maxPixel; i++) {
    res += `${i}px :  ${(i / base).toFixed(5)}rem \n\n `;
  }
  return res;
}

var content = generatePixelCompatableByBasePixel(16);

exec(`echo "${content}" >> pixel16.txt`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});


fs.readFile('./pixel.txt','utf8', (err, data)=> {
  console.log('err:', err);

  console.log('data: ', data);

  var a = {a : data}
  console.log('obj :', a);

});
