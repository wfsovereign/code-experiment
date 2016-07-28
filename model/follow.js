var mongoose = require('mongoose');
var Schema = mongoose.Schema;

db = mongoose.createConnection('localhost','3dker');

// mongoose.connect(config.db.url);
// var db = mongoose.connection;
// db.on('error', function(err) {
// 	if (err) {
// 		console.error('db connet error,now exit thread');
// 		process.exit(-1);
// 	}
// 	console.log('***********db connect success********');
// });
// db.once('open', function() {
// 	debug('***********db connect success********');
// });

var FollowSchema = new Schema({
	site_code: {
		type: String,
		default: process.env.site_code || 'cn'
	},
	//关注的对象
	follow_user: {
		name: String,
		id: Schema.Types.ObjectId
	},
	//发起关注请求的对象
	followed_user: {
		name: String,
		id: Schema.Types.ObjectId
	},
	created_by: Schema.Types.ObjectId,
	created_on: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		//status: ['enabled', 'canceled', 'blocked']
		default: 'enabled'
	}
});

module.exports = db.model('Follow',FollowSchema);

// module.exports.index({
// 	follow_user: 1
// });
// module.exports.index({
// 	followed_user: 1
// });

/**
 * 用户关注总表
 *
 * {String} site_code: 归属站点
 * {String} follow_user: 关注人 userid
 * {String} follow_user_name: 关注人的昵称
 * {String} followed_by: 被关注人 userid
 * {String} followed_by_name: 被关注人的昵称
 * {String} created_by: 注册人 userid
 * {Number} created_on: 注册时间
 * {String} status: ['enabled', 'canceled', 'blocked']
 */
