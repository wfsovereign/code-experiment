
var User = require('../model/user');
var Follow = require('../model/follow');
var async = require('async');

console.log('begin');
module.exports = function () {
    User.find({},function (err,users) {
        if(err) {
            console.log('数据库 user 集合出错，已结束进程');
            console.log(err);
            process.exit(-1);
            return false;
        }
        var count = 1;
        async.map(users,function (user,callback) {
            /**
             * @description 根据用户id查找follow集合其所对应的follow、followed数量
             * 如果与user本身存储的相同则不进行变动，如果有误则更新user数据
             */
             user.profile = user.profile || {};
             if(!user.profile.followed && !user.profile.follow) return callback(null,0);
             async.parallel([function (cb) {
                 if(!user.profile.followed) return cb(null);
                 Follow.find({
                     'followed_user.id':user._id
                 }).count(function (err,number) {
                     if(err) return cb('db error'+err);
                     return cb(null,number);
                 });
             },function (cb) {
                 if(!user.profile.follow) return cb(null);
                 Follow.find({
                     'follow_user.id':user._id
                 }).count(function (err,number) {
                     if(err) return cb('db error' + err);
                     return cb(null,number);
                 });
             }],function (err,result) {
                 if(err) callback(err);
                 async.parallel([function (cc) {
                     if( result[0] != (user.profile.follow || 0 )){
                         User.update({
                             _id:user._id
                         },{
                             $set:{
                                 'profile.follow':result[0]
                             }
                         },function (err,result) {
                             cc(err,count);
                         });
                     }else{
                         cc(null,0);
                     }
                 },function (cc) {
                     if(result[1] != (user.profile.followed || 0 )){
                        User.update({
                            _id:user._id
                        },{
                            $set:{
                                'profile.followed':result[1]
                            }
                        },function (err,result) {
                            cc(err,count);
                        });
                    }else {
                        cc(null,0);
                    }
                }],function (err,r) {
                    if(err) return callback(err);
                    console.log(r);
                    callback(null,r[0]+r[1]);
                });
             });
        },function (err,rectify_result) {
            if(err){
                console.log('更新出错，请重试');
                console.log(err);
                process.exit(-1);
                return false;
            }
            console.log(rectify_result);
            console.log('共更新数据：' + rectify_result[0] + '条');
            console.log('exit');
            process.exit(-1);
            return true;
        });
    });
};
