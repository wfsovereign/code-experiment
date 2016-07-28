var _ = require('lodash');
var seriesName = 'beautiful',
  executeTime = 12345,
  price = 1000;

var remark = `套系名称：${seriesName}
拍摄日期：${executeTime}
金额：${price}元
点击“详情”实时查看订单状态`;

var compiled = _.template(remark);
var str = compiled({
  seriesName: seriesName,
  executeTime: executeTime,
  price: price
});
// console.log(str);

console.log(_.template(remark)({
  seriesName: seriesName,
  executeTime: executeTime,
  price: price
}));


var title = 'just a title ,nothing other ${user}';
console.log(_.template(title)());
