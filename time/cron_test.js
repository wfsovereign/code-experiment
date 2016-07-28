var CronJob = require('cron').CronJob;
var co = require('co');

var schedules = co.wrap(function *() {
  console.log('啦啦啦~');
  console.log('get in schedules');
  function simulation() {
    setTimeout(function() {
      console.log(new Date().toLocaleString());
    }, 1000);
  }

  yield simulation();
});

var job = new CronJob('* 20 * * * *', schedules, function() {
  /* This function is executed when the job stops */
  console.log('job stops');
});

job.start();
