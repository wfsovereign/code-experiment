

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


db = mongoose.createConnection('localhost','3dker');
// var db = mongoose.connection;
// db.on('error', function(err) {
// 	if (err) {
// 		console.log(err);
// 		console.error('db connet error,now exit thread');
// 		process.exit(-1);
// 	}
// 	console.log('***********db connect success********');
// });
// db.once('open', function() {
// 	debug('***********db connect success********');
// });


var UserSchema = new Schema({
	site_code: {
		type: String,
		default: process.env.site_code || 'cn'
	},
	//昵称
	nick_name: {
		type: String,
		default: 'nick name'
	},
	//邮件
	emails: {
		address: String,
		verified: Boolean,
	},
	//手机号码
	phones: {
		number: String,
		verified: Boolean,
	},
	//密码
	password: String,
	create_at: {
		type: Date,
		default: Date.now
	},
	//密码，token之类的放这里,也可以放邮箱或者短信的验证码
	//这里必须要考虑多个设备登录的情况，同一类设备可以考虑只有1个token
	//user.services.session:{web:{token session的token , expire{number} 有效日期}}
	//user.services.email_verfiy:{code 邮件验证token ， expire 有效日期}
	//user.services.phone_reset_code:{code 短信重置密码验证码, expire 有效日期 }
	//user.services.email_reset_code:{code 邮件重置密码验证码,expire 有效日期}
	services: Schema.Types.Mixed,
	//profile.signature 签名
	//profile.avatar file id
	//profile.gender
	//这里必须要记住连动更新的机制
	//profile.followed 粉丝数
	//profile.follow 我的关注
	//profile.
	profile: Schema.Types.Mixed,
	roles: [],
	//登录记录
	login_history: {
		//app端
		app: {
			pre: {
				time: Date,
				ip: String
			},
			//本次登录
			cur: {
				time: Date,
				ip: String
			}
		},
		soft: {
			pre: {
				time: Date,
				ip: String
			},
			//本次登录
			cur: {
				time: Date,
				ip: String
			}
		},
		//web端
		web: {
			pre: {
				time: Date,
				ip: String
			},
			//本次登录
			cur: {
				time: Date,
				ip: String
			}
		},
		// device端
		device: {
			pre: {
				time: Date,
				ip: String
			},
			//本次登录
			cur: {
				time: Date,
				ip: String
			}
		}
	}
});

module.exports = db.model('User',UserSchema);
//
// module.exports.index({
// 	emails: 1
// });
// module.exports.index({
// 	phones: 1
// });
