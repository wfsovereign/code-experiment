var Event = {
  on: function(name, callback) {
    if (!name) throw new Error('name is invalid');
    this.eventCache = this.eventCache || {};
    this.eventCache[name] = callback;
  },

  emit: function(name) {
    if (!name) throw new Error('name is invalid');
    if (!this.eventCache || !this.eventCache[name]) throw new Erorr('event is not exist');
    this.eventCache[name] && this.eventCache[name](arguments[1]);
  }
}

Event.on('test', function (result) {
  console.log('test');
  console.log(result);
});

Event.emit('test', 'hello world');
