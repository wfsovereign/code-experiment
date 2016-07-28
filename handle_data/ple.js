var fs = require('fs');
var child_process = require('child_process');
var files = fs.readdirSync('/media/sf_Downloads/Archive/');
var async = require('async');

// var rs = child_process.spawn('./a.out',['/home/wfsovereign/ple/CP-20150000052-0V200.ple']);
//     var _data = '';
//     rs.stdout.on('data',function(data){
//             console.log('out ',data);
//             _data +=data;
//     });
//     rs.stdout.on('end',function(){
//         console.log('filename',file,_data)
//             console.log({fileName:file,data:_data});
//     });

//挂在外部程序
async.mapSeries(files, function(file, cb) {
    var rs = child_process.spawn('./a.out', ['/media/sf_Downloads/Archive/' + file]);
    var _data = '';
    rs.stdout.on('data', function(data) {
        _data += data;
    });
    rs.stdout.on('end', function() {
        console.log('filename', file, _data);
        cb(null, {
            fileName: file,
            data: 'einscan' + _data.split('\n')[0]
        });
    });

}, function(err, data) {
    if (err) {
        console.log('err ', err);
        return;
    }
    fs.writeFile('ple_datas.json', JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('write success');
    });
    console.log(data);
})