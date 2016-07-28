

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

//var a = exec('du -h',function  (err,out,serr) {
//    if(err) throw err;
//    console.log(out);
//});

// exec('mkdir abc',function  (err,out,serr) {
//     if(err) throw err;
//     console.log(out);
// });

//exec('du -h',function (e,out,err){
//   if(e) throw e;
//   console.log(out);
//   console.log(err);
//});

//process.exit(0);
var b = spawn('node',['array.js']);

b.stdout.on('data',function (data){
    console.log('out',data.toString());
});
b.stderr.on('data',function (data){
    console.log('err',data);
});
b.on('close',function (code){
    console.log('close',code);
});

//process.exit(0);



