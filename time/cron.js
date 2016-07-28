var CronJob = require('cron').CronJob;
var job = new CronJob('01 * * * * *', function() {
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
     console.log('executed task');



  }, function() {
    /* This function is executed when the job stops */
    console.log('job stops');
  }
);

job.start();
