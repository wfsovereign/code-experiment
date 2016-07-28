process.env.DEBUG = 'picbling-*';
var myDBC = require('./dbc/mysql')();
var mgDBC = require('./dbc/mongo/index')();
var debug = require('debug')('picbling-index');
var co = require('co');

debug('go');
debug(mgDBC);
var main = co.wrap(function *() {
    var users = yield myDBC.tb_users.findAll();
    debug('length ', users.length);
    var waitSaveUsers = [];
    users.forEach(ele => {
        waitSaveUsers.push({
            user_id: ele.id,
            wx: ele.ext_wx_id,
            qq: ele.ext_qq_id,
            nick_name: ele.nick_name,
            phone: ele.phone,
            email: ele.email,
            avatar_url: ele.head_url,
            gender: ele.gender,
            occupation: ele.occupation,
            place_like_number: ele.place_like_number,
            user_like_number: ele.user_like_number,
            reg_time: ele.reg_time,
            type: ele.type
        });
    });
    mgDBC.tb_users.create(waitSaveUsers, function (err, r) {
        debug('m');
        debug(err);
        debug(r);
        debug('game over');
        process.exit(0);
    });
});

main();