 var Promise = function() {
   this.state = 'pending';
   this.thenables = [];
 }

 Promise.prototype.resolve = function(value) {
   if (this.state != 'pending') return;

   this.state = 'fulfilled';
   this.value = value;
   this._handlethen();
   return this;
 };

 Promise.prototype.reject = function (reason) {
  if (this.state != 'pending') return;

  this.state = 'rejected';
  this.reason = reason;
  this._handlethen();
  return this;
};

 Promise.prototype.then = function(onFulfilled, onRejected) {
   var thenable = {};
   if (typeof onFulfilled === 'function') thenable.fulfill = onFulfilled;
   if (typeof onRejected === 'function') thenable.reject = onRejected;

   if (this.state != 'pending') {
     setImmediate(function() {
       this._handlethen();
     }.bind(this));
   }

   thenable.promise = new Promise();
   this.thenables.push(thenable);

   return thenable.promise;
 };

 Promise.prototype._handlethen = function() {
   if (this.state === 'pending') return;

   if (this.thenables.length) {
     var len = this.thenables.length;
     for (var i = 0; i < len; i++) {
       var thenPromise = this.thenables[i].promise;
       var returnVal;

       try {
         switch (this.state) {
           case 'fulfilled':
             if (this.thenables[i].fulfill) returnVal = this.thenables[i].fulfill(this.value);
             else thenPromise.resolve(this.value);
             break;
           case 'rejected':
             if (this.thenables[i].reject) returnVal = this.thenables[i].reject(this.reason);
             else thenPromise.reject(this.reason);
             break;
         }

         if (returnVal === null) this.thenables[i].promise.resolve(returnVal);
         else if (returnVal instanceof Promise || typeof returnVal.then === 'function')
           returnVal.then(thenPromise.resolve.bind(thenPromise), thenPromise.reject.bind(thenPromise));
         else this.thenables[i].promise.resolve(returnVal);

       } catch (e) {
         thenPromise.reject(e);

       } finally {

       }
     }
   }
 };

 var t = new Promise();
 asyncTest();
 t.then(function (value) {
     console.log('obj');
     console.log(value);
 })


 function asyncTest() {
   setTimeout(function() {
     console.log('hello wfsovereign');
     t.resolve(99);
   }, 1000);
 }
