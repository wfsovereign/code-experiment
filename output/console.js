// `delay`毫秒后执行resolve
function timerPromisefy(delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(delay);
    }, delay);
  });
}
var startDate = Date.now();
// 所有promise变为resolve后程序退出

Promise.all([
  timerPromisefy(1),
  timerPromisefy(32),
  timerPromisefy(64),
  timerPromisefy(128)
]).then(function(values) {
  console.log(Date.now() - startDate + 'ms');
  // 約128ms
  console.log(values); // [1,32,64,128]
});


function person(argument) {
  this.name = 'sovereign',
    this.age = 10;
}

// var data = "4f31 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4150 0000 0005 5730 0010 0590 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4555 0000 0007 2bf0 0001 3880 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4144 0000 0006 7c28 0000 3a98 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4145 0000 0003 a980 0008 3d60 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4146 0000 0005 0910 0009 eb10 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4147 0000 0002 9a04 fff6 91f0 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 0000 0000 0000 0000 0000 0000 0000 0000
// 4149 0000 0002 c8e4 fff6 5c8d 0000 0000";

// console.log(data.toString('utf8'));

var a = [{
    a: 1
  }, {
    a: 2
  }, {
    a: 3
  }],
  b = [1, 2, 3],
  c = [
    [1],
    [2],
    [3]
  ];
a.forEach(function(ele) {
  ele.a += 1;
});
b.forEach(function(ele) {
  ele += 1;
});
c.forEach(function(ele) {
  ele = ele.push(2);
});
console.log('obj');
console.log(a);
console.log(b);
console.log(c);


console.log('===========================');

var slice = Array.prototype.slice;

function sliceArray() {
  console.log('0000');
  console.log(arguments);
  console.log(new Array(arguments).slice(0));
  console.log(slice.call[arguments]);
  console.log(Array.prototype.slice.call(arguments));
  //() => {
  //    console.log('=>');
  //}();
}


sliceArray([1, 23, 4, 5, 5, 6, 7, 8], [1, 2, 999]);

console.log('------------');
var tb_orders = [
  "id",
  "user_id",
  "customer_evaluate",
  "price",
  "state",
  'work_time',
  'photo_num',
  'decorate_num',
  'dress_num',
  'is_makeup',
  'is_choose',
  'remarks',
  'customer_id',
  'photo_place',
  'series_category',
  'series_id',
  'series_name',
  'work_id',
  'create_time',
  'finish_time',
  'execute_time',
  'refuse_reason',
  'deposit',
  'cancel_reason',
  'user_op_time',
  'customer_op_time',
  'income_decorate',
  'price_decorate',
  'give_type',
  'is_passed',
  'fail_reason'
];
console.log(JSON.stringify(tb_orders))

var _ = require('lodash');

var a = '110000';

var index = _.findLastIndex(a, (chr) => {
  return chr != '0';
});

console.log('2016年01月13日21:24:53');
console.log(index);
console.log('2016年01月22日11:08:46');
console.log(require("os").hostname());
var EventEmitter = require('events').EventEmitter;


console.log(EventEmitter.prototype);

console.log('2016年02月01日15:49:32');

var oldman = {
  name: 'hello world',
  age: '66',
  sex: 'female'
}
console.log(oldman);
delete oldman.age;
console.log(oldman);


console.log('2016年02月02日12:14:56');

var original = {
    pre: 'hello'
  },
  decorated = {
    cur: 'world'
  };
// Object.assign(original,decorated);
_.assign(original, decorated);
console.log(original);


var queryString = require('querystring');
console.log('2016年02月20日18:52:00');
var sjon = queryString.stringify(original);
console.log(sjon);
console.log(typeof sjon);
sjon = sjon.replace(/&/g, '=');
console.log(sjon);


console.log('2016年02月24日19:28:06');
var util = require('util');
var urlFormat = "%s?apikey=%s&text=%s&mobile=%s&tpl_id=%s&tpl_value=%s";
var formatResult = util.format(urlFormat, 'aa', '123', 'hello', '1898099', '1234', encodeURIComponent('#name#=1234&#url#=http://www.sina.com').replace(/[!'()]/g, escape).replace(/\*/g, "%2A"));
console.log(formatResult);
var ooo;
console.log(encodeURIComponent(ooo).replace(/[!'()]/g, escape).replace(/\*/g, "%2A"));




console.log('2016年02月26日10:36:17');
var galax = 10;
while (galax) {
  console.log(galax);
  galax--;
}


console.log('2016年03月07日20:53:22');

function print_params_count(a) {

  console.log(a);

  function inner(b, c, d) {
    console.log('inner');
    // console.log(b);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    // console.log(c);
    // console.log(d);


  }
  // var params = Array.prototype.slice.apply(arguments,1);
  // console.log('params 0000: %s', params);
  inner(arguments);
}
print_params_count(2, 3, 4, 5);


var time1 = 77109123;

var time2 = 72222720;

var dv = 24 * 60 * 60 * 1000;

console.log('2016年04月02日23:41:53');
console.log(time1 / dv);
console.log(time2 / dv);
console.log(92 / 8);
console.log(65 / 3);








console.log('2016年04月12日16:44:10');

function createThreeMonthDateByType(type) {
  var dates = [],
    now = new Date(),
    gap = 1;
  now.setHours(0, 0, 0, 0);
  if (type == 3) {
    gap = 7;
    var weekNum = now.getDay();
    if (weekNum === 0) {
      dates.push(new Date(now.getTime()));
      now.setDate(now.getDate() + 6);
    } else if (weekNum < 6) {
      now.setDate(now.getDate() + 6 - weekNum);
    }
  }

  for (var i = 1; i <= 90; i += gap) {
    dates.push(new Date(now.getTime()).toLocaleDateString());
    now.setDate(now.getDate() + 1);
    if (type == 3) {
      dates.push(new Date(now.getTime()).toLocaleDateString());
      now.setDate(now.getDate() + gap - 1);
    }
    if (type == 2) {
      var currentDay = now.getDay();
      if (currentDay == 1 || currentDay == 0) dates.pop();
    }
  }
  return dates;
}
console.log(createThreeMonthDateByType(3));


var page_sound_id = 1009948;
var page_sound_obj = {
  "name": "IU\u7ffb\u5531\u300c\u6591\u9a6c\u6591\u9a6c\u300d\u73b0\u573a\u7248",
  "length": "251",
  "view_count": "1638574",
  "channel": {
    "id": 1138,
    "name": "\u90a3\u4e9b\u597d\u542c\u7684\u660e\u661f\u7ffb\u5531",
    "pic": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg",
    "info": "\u7ecf\u5178\u66f2\u76ee\uff0c\u767e\u5531\u4e0d\u817b\uff0c\u4f17\u660e\u661f\u518d\u7ffb\u5531\u522b\u6709\u98ce\u5473",
    "type": 1,
    "tag_id": 5,
    "sound_count": 16137,
    "follow_count": 292853,
    "like_count": 0,
    "share_count": 2557,
    "user_id": 160623,
    "update_user_id": 160623,
    "list_order": 126786,
    "create_time": 1424931676,
    "update_time": 1448598312,
    "status": 1,
    "desp": "",
    "pic_100": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg-100",
    "pic_200": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg-200",
    "pic_500": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg-500",
    "pic_640": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg-640",
    "pic_750": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg-750",
    "pic_1080": "http:\/\/kibey-echo.b0.upaiyun.com\/poster\/2015\/11\/27\/ozzdql5wdr50es6o.jpg-1080"
  },
  "pic": "http:\/\/echo-image.qiniucdn.com\/FnccfNMhRisephqe58_YWOgxUQS7",
  "pic_100": "http:\/\/echo-image.qiniucdn.com\/FnccfNMhRisephqe58_YWOgxUQS7?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/100\/q\/100",
  "id": "1009948",
  "user": {
    "id": "2501986",
    "name": "xxxlbgdrgn__",
    "avatar": "http:\/\/echo-image.qiniucdn.com\/84e0e32da2952325c4f369acb6f4f08bb956891e?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0",
    "photo": "http:\/\/echo-image.qiniudn.com\/84e0e32da2952325c4f369acb6f4f08bb956891e",
    "pay_class": "1",
    "pay_status": "2",
    "famous_status": "0",
    "followed_count": "17935",
    "status": "1",
    "famous_type": null,
    "avatar_150": "http:\/\/echo-image.qiniucdn.com\/84e0e32da2952325c4f369acb6f4f08bb956891e?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!150x150r\/gravity\/Center\/crop\/150x150\/dx\/0\/dy\/0",
    "avatar_100": "http:\/\/echo-image.qiniucdn.com\/84e0e32da2952325c4f369acb6f4f08bb956891e?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!100x100r\/gravity\/Center\/crop\/100x100\/dx\/0\/dy\/0",
    "avatar_50": "http:\/\/echo-image.qiniucdn.com\/84e0e32da2952325c4f369acb6f4f08bb956891e?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!50x50r\/gravity\/Center\/crop\/50x50\/dx\/0\/dy\/0",
    "is_follow": 0
  },
  "create_time": "1450626616",
  "is_like": 0,
  "share_count": "27126",
  "channel_id": "1138",
  "like_count": "37505",
  "comment_count": "2158",
  "info": " IU\u81ea\u5f39\u81ea\u5531\u4e2d\u6587\u6b4cLIVE\u6591\u9a6c\u6591\u9a6c\uff0c \u4f60\u4eec\u89c9\u5f97\u6bd4\u539f\u7248\u5b8b\u51ac\u91ce\u8fd8\u5531\u7684\u597d\u5417\uff1f\r\n\r\n\u539f\u5531\uff1a\u5b8b\u51ac\u91ce\r\n\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u4e0d\u8981\u7761\u7740\u5566\r\n\r\n\u518d\u7ed9\u6211\u770b\u770b\u4f60\u53d7\u4f24\u7684\u5c3e\u5df4\r\n\r\n\u6211\u4e0d\u60f3\u53bb\u89e6\u78b0\u4f60\u4f24\u53e3\u7684\u75a4\r\n\r\n\u6211\u53ea\u60f3\u6380\u8d77\u4f60\u7684\u5934\u53d1\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u56de\u5230\u4e86\u4f60\u7684\u5bb6\r\n\r\n\u53ef\u6211\u6d6a\u8d39\u7740\u6211\u5bd2\u51b7\u7684\u5e74\u534e\r\n\r\n\u4f60\u7684\u57ce\u5e02\u6ca1\u6709\u4e00\u6247\u95e8\u4e3a\u6211\u6253\u5f00\u554a\r\n\r\n\u6211\u7ec8\u7a76\u8fd8\u8981\u56de\u5230\u8def\u4e0a\r\n\r\n\u6591\u9a6c\u6591\u9a6c\uff0c\u4f60\u6765\u81ea\u5357\u65b9\u7684\u7ea2\u8272\u554a\r\n\r\n\u662f\u5426\u4e5f\u662f\u4e2a\u52a8\u4eba\u7684\u6545\u4e8b\u554a\r\n\r\n\u4f60\u9694\u58c1\u7684\u620f\u5b50\u5982\u679c\u4e0d\u80fd\u7559\u4e0b\r\n\r\n\u8c01\u4f1a\u548c\u4f60\u7761\u5230\u5929\u4eae\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u8fd8\u8bb0\u5f97\u6211\u5417\r\n\r\n\u6211\u662f\u53ea\u4f1a\u6b4c\u5531\u7684\u50bb\u74dc\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u7761\u5427\u7761\u5427\r\n\r\n\u6211\u4f1a\u80cc\u4e0a\u5409\u4ed6\u79bb\u5f00\u5317\u65b9\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u8fd8\u8bb0\u5f97\u6211\u5417\r\n\r\n\u6211\u662f\u5f3a\u8bf4\u7740\u5fe7\u6101\u7684\u5b69\u5b50\u554a\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u7761\u5427\u7761\u5427\r\n\r\n\u6211\u628a\u4f60\u7684\u9752\u8349\u5e26\u56de\u6545\u4e61\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u4e0d\u8981\u7761\u7740\u5566\r\n\r\n\u6211\u53ea\u662f\u4e2a\u5306\u5fd9\u7684\u65c5\u4eba\u554a\r\n\r\n\u6591\u9a6c\u6591\u9a6c \u4f60\u7761\u5427\u7761\u5427\r\n\r\n\u6211\u8981\u5356\u6389\u6211\u7684\u623f\u5b50\r\n\r\n\u6d6a\u8ff9\u5929\u6daf",
  "source": "http:\/\/7u2r6o.com2.z0.glb.qiniucdn.com\/m1\/444b7bfc9498d57850ec2398f70c7f8836192ab829c14769dccd25cbfd7990a86f9e385d.m3u8?1450626638"
};
for (var variable in page_sound_obj.channel) {
  if (page_sound_obj.channel.hasOwnProperty(variable) && typeof page_sound_obj.channel[variable] === 'string') {
    console.log(variable + ' :' + page_sound_obj.channel[variable].toString('utf8'));
  }
}

// console.log(page_sound_obj.info.toString('utf8'));
