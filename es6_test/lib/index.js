'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var B = function () {
    function B() {
        (0, _classCallCheck3.default)(this, B);

        var smile = '(＾0＾）';
        this.hello = 'Hello ' + smile;
    }

    (0, _createClass3.default)(B, [{
        key: 'sayHello',
        value: function sayHello() {

            //return () => {
            return this.hello += ' 哈哈';
            //}()
        }

        //async getNumber(x) {
        //    return new Promise((resolve, reject) => {
        //        setTimeout(() => {
        //            resolve(Number(x))
        //        }, 200);
        //    });
        //}

    }]);
    return B;
}();

exports.default = B;