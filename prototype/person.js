



function Person (name) {
    console.log('message');
}


Person.prototype.say = function  () {
    console.log('say');
}

var util = require('util');
var events = require('events');

util.inherits(Person,events.Evenemitter);

module.exports = Person;