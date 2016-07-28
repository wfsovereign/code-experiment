var uuid = require('uuid');

console.log(uuid.v4().replace(/-/g,'').slice(0,10));