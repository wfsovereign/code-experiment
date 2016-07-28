// var t = require('./lodash_test');
module.exports = {
    msg:"hello"
};

setTimeout(function() {
    module.exports.msg = 'helloworld'
}, 100);
