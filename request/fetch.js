var http = require('http');
var superAgent = require('superagent');
var request = require('request');
var fs = require('fs');
var url = 'http://static.huajiao.com/huajiao/web/static/swf/hls_live/pc_hls.swf?v=3141d98';
var url2god = 'http://upuwmp3.changba.com/userdata/userwork/490/620495490.mp3';

request
  .get(url)
  .on('error', function(err) {
    // handle error
  })
  .pipe(fs.createWriteStream('xiaoshuangmissing.mp4'));
