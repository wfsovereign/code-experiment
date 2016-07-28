process.env.DEBUG = '虫草啊-';
var fs = require('fs');
var MissYou = fs.readFileSync('./data/miss.txt','utf8');
var debug = require('debug')('虫草啊-');

var meet = '只有大雨中 才羞于干涸';
debug('原文：')
debug(MissYou);
debug('相遇：')
debug(meet);
debug('原文长度：')
debug(MissYou.length);
debug('相遇长度：')
debug(meet.length);
debug('单就这首歌而言，咱们相遇的概率：' + (meet.length/MissYou.length) * 100 + '%');
// debug();

