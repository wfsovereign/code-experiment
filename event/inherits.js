var util = require('util');
var EventEmitter = require('events').EventEmitter;

//一个包含 "freq" 和 "name" 属性的对象
var Radio = function(station) {
    //保存 指向Radio的this，在setTimeout()中使用
    var self = this;

    setTimeout(function() {
        self.emit('open', station);
    }, 0);

    setTimeout(function() {
        self.emit('close', station);
    }, 5000);

    this.on('newListener', function(listener) {
        console.log('Event Listener: ' + listener);
    });

};

//Radio 继承 EventEmitter
util.inherits(Radio, EventEmitter);

var radio = new Radio(function () {
    console.log('hello world');
});


radio.on('open', function (f) {
  f();
});

radio.on('close', function (f) {
  f();
});
