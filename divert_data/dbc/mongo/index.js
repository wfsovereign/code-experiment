var mongoose = require('mongoose');
var debug = require('debug')('picbling-dbc-mongodb-controller-index');
var fs = require('fs');
var path = require('path');
//标记，防止重复加载
var isReady = false;

//schema对象缓存
var schema = {};

module.exports = function () {
    if (isReady) return schema;
    isReady = true;
    mongoose.connect('mongodb://localhost/misty');
    var db = mongoose.connection;
    db.on('error', function (err) {
        if (err) {
            console.log(err);
            console.error('mongodb connect error,now exit thread');
            process.exit(-1);
        }
        debug('*********** mongodb connect success********');
    });
    db.once('open', function () {
        debug('*********** mongodb connect success********');
    });
    var userSchema = new mongoose.Schema({
        user_id: String,
        wx: String,
        qq: String,
        nick_name: String,
        phone: String,
        email: String,
        avatar_url: String,
        gender: String,
        occupation: String,
        place_like_number: String,
        user_like_number: String,
        reg_time: String,
        type: String
    });
    schema['tb_users'] = mongoose.model('tb_users', userSchema);
    return schema;
};
