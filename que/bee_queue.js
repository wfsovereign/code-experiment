var _ = require('lodash');

var kue = require('./../queue/index');
var q = kue.createQueue({
    prefix: 'test:q',
    redis: {
        port: 6366,
        auth: 'eyJhbGciOiJIUzI1NiJ9.NWRmYjI5ODIyMzhlOTU1OGE0ZDRkMGVkZTNkZTk0MDYyMjZkMDJkZGRkYWJiZGRhMWE0Y2ViZDEzNmQ1ODk4ODFlM2EzZjY2ZTMwYTFiMzY3ZTFhMTdhMjEwM2Y1MGVhYWQ0MGVlOThmY2YyNTkwMDNmNWQzNDExOTQyNjAyNzE.7yU3Lma0Aq9OwvKNKx7MQjh78kmJ6DxpyVebY0yZj6g'
    }
});
var count = 10000;
q.on('job enqueue', function (id, type) {
  console.log( 'Job %s got queued of type %s', id, type);
});


var job = q.create('email', {
    name: 'number1',
    delay: 10000
}).attempts(3).backoff({
    delay: 2 * 1000,
    type: 'fixed'
}).ttl(3 * 60 * 1000).save(function (err) {
    if (!err) console.log(job.id);
});
var job2 = q.create('email', {
    name: 'number2',
    delay: 10000
}).attempts(3).backoff({
    delay: 2 * 1000,
    type: 'fixed'
}).ttl(3 * 60 * 1000).save(function (err) {
    if (!err) console.log(job.id);
});

q.process('email', function (job, ctx, done) {
  console.log('----');
  // console.log('job ', job);
  console.log('process job id %s', job.id);
    function next(i) {
        console.log(i);
        console.log('----------');
        console.log(job.data);
        async(2000, function (err) {
            if (err) {
                console.log(err);
                done(err);
            }
            var random = Math.random();
            console.log('random:', random * i);
            console.log(job.data.delay);
            console.log((random * i) >= job.data.delay);
            if ((random * i) >= job.data.delay) {
                done(null, 'ok !')
            }
            //else next(i + 10000);
            else {
                done('ok ?');
            }

        });
    }

    function async(time, fn) {
        setTimeout(fn, time);
    }

    next(15000);

    //console.log('========email==========');
    //console.log(job.data);
    //console.log('===1=');
    //console.log(Object.keys(job));
    //console.log('===3=');
    //console.log(ctx);
    //console.log('===2=');
    //console.log(done);
});


var job3 = q.create('email', {
    name: 'number3',
    delay: 10000
}).attempts(3).backoff({
    delay: 2 * 1000,
    type: 'fixed'
}).ttl(3 * 60 * 1000).save(function (err) {
    if (!err) console.log(job.id);
});

job.on('complete', function (result) {
    console.log('Job 1 completed with data ', result);
}).on('failed', function (errorMessage) {
    console.log('job 1 failed ', errorMessage);
});

job2.on('complete', function (result) {
    console.log('Job 2 completed with data ', result);
}).on('failed', function (errorMessage) {
    console.log('job 2 failed ', errorMessage);
});

job3.on('complete', function (result) {
    console.log('Job 3 completed with data ', result);
}).on('failed', function (errorMessage) {
    console.log('job 3 failed ', errorMessage);
});


//job.on('complete', function (result) {
//    console.log('Job completed with data ', result);
//    process.exit(0);
//
//}).on('failed attempt', function (errorMessage, doneAttempts) {
//    console.log('Job attempt failed');
//
//}).on('failed', function (errorMessage) {
//    console.log('Job failed');
//    process.exit(-1);
//}).on('progress', function (progress, data) {
//    console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data);
//});
//
//
