var options = [{
  'Content-Type': 'application/json; charset=utf-8',
  "Accept-Encoding": "gzip,sdch",
  'X-Auth-Token': 'eyJhbGciOiJIUzI1NiJ9.NTUwMzRlN2EtZTk0YS00YmQ3LThhMGMtOTVhNjgzYzgxN2Vh.WMvR8wnaWdM03-nMns6f4ETsMaZHb6TejXAA5gO0Pgg'
}, {
  'Content-Type': 'application/json; charset=utf-8',
  "Accept-Encoding": "gzip,sdch",
  'X-Auth-Token': 'eyJhbGciOiJIUzI1NiJ9.OGFkZmQ5OGMtOGI2NC00NmNlLWE1ZWUtODdjMjJkY2QwY2Ux.KUOGhsszTJvgoWxwAtfkLGk-gjQDX7hgDtOQ9gOxVng'
}];
var co = require('co');
var mark = false,
  count = 0;
var url = 'http://localhost:8080/order/save';
var superAgent = require('superagent');
var token = 'eyJhbGciOiJIUzI1NiJ9.ZXlKaGJHY2lPaUpJVXpJMU5pSjkuTm1JNE5tWmpNekF0Wldaa09TMDBNamxtTFRnMk9XWXRObUUxTmpJd05ERm1aVGcyLnZfMUpQblNZM2xlRzNLMVlnekZzY2lFRlNVc19qTGhocy1qUUdXZDJDam8.cFGUDK9haxG6TpQDUMPan6Dx83-rNbZHfqv2Ldec3-o';
var headers = {
  'Content-Type': 'application/json; charset=utf-8',
  "Accept-Encoding": "gzip,sdch",

};

var order = {
  customerId: 1,
  orderName: "hello blue ifish",
  orderStatus: 1,
  aquaticBaseInfoId: 1,
  vendorId: 1
}

// superAgent.post(url).set(headers).send(order).end(function(err, res) {
//   // mark = mark === false;
//   console.log(res.body);
//
//
// });




superAgent.get('http://localhost:30000/api/algorithms/').end((err, res)=>{
  console.log('err :', err);
  console.log('res : ', res);
})
