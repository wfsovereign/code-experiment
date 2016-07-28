var util = require('util');
function SMS () {

}


util.inherits(SMS, require('events').EventEmitter);
var sms = new SMS();
sms.on('send', function (data) {
  console.log(data);
  try {
    throw new Error('oo');

  } catch (e) {
    sms.emit('error',e)
  } finally {

  }
});
sms.on('error', function (e) {
  console.log('error', e);
})
module.exports = sms;
