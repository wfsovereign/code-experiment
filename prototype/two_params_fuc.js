

function a (one,two) {
    one('123');
    two('222');
    return  "what's your name? baby";
}

function b (p) {
    console.log('this is b');
}

function c (p) {
    console.log('this is c');
}

// a(b,c);

var p = require('./person.js');
p('1234').say('ooooo');
