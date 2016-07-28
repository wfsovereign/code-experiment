var kue = require('./../queue/index');
var _ = require('lodash');
var queue = kue.createQueue({
	prefix: 'test:q',
	redis: {
		port: 6366,
		auth: 'eyJhbGciOiJIUzI1NiJ9.NWRmYjI5ODIyMzhlOTU1OGE0ZDRkMGVkZTNkZTk0MDYyMjZkMDJkZGRkYWJiZGRhMWE0Y2ViZDEzNmQ1ODk4ODFlM2EzZjY2ZTMwYTFiMzY3ZTFhMTdhMjEwM2Y1MGVhYWQ0MGVlOThmY2YyNTkwMDNmNWQzNDExOTQyNjAyNzE.7yU3Lma0Aq9OwvKNKx7MQjh78kmJ6DxpyVebY0yZj6g'
	}
});

var smsQueueInstance = [{
	verify: 6,
	content: 'pass 1 '
}, {
	verify: 9,
	content: 'pass 2 '
}, {
	verify: 3,
	content: 'interdiction 1 '
}, {
	verify: 4,
	content: 'interdiction 2 '
}];
var result = [],
	smsQ = [];
queue.process('email', function(job, ctx, done) {
	console.log('------process-------');
	console.log(job.data);
	if (job.data.verify > 5) return done('over max');
	aysncExecution(job.data.content,done);
});
queue.on('enqueue',function (result){
        console.log('enqueue instance =========');
        console.log(result);
    });
smsQueueInstance.forEach(ele => {
	var job = queue.create('email', ele).ttl(3 * 60 * 1000).save();
	job.on('complete', function(result) {
		console.log('Job 1 completed with data ', result);
	}).on('failed', function(errorMessage) {
		console.log('job 1 failed ', errorMessage);
	});
});
console.log('===============');
console.log(result);


function aysncExecution(content, fn) {
	setTimeout(() => {
		result.push(content);
		fn && fn(null, content);
	}, 2000);
}