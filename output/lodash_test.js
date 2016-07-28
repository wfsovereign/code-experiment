var _ = require('lodash');
var t = _.conforms({
  age: function() {
    return ''
  }
});

console.log('main: ', require.main);
console.log(require.main === module);
console.dir(t);


module.exports = 1;
