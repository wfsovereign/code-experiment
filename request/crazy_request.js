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
var url = 'http://localhost:3000/api/p/test';
var superAgent = require('superagent');
var token = 'eyJhbGciOiJIUzI1NiJ9.ZXlKaGJHY2lPaUpJVXpJMU5pSjkuTm1JNE5tWmpNekF0Wldaa09TMDBNamxtTFRnMk9XWXRObUUxTmpJd05ERm1aVGcyLnZfMUpQblNZM2xlRzNLMVlnekZzY2lFRlNVc19qTGhocy1qUUdXZDJDam8.cFGUDK9haxG6TpQDUMPan6Dx83-rNbZHfqv2Ldec3-o';
var headers = {
    'Content-Type': 'application/json; charset=utf-8',
    "Accept-Encoding": "gzip,sdch",
    'X-Auth-Token': token
}
// for (var i = 0; i < 2; i++) {
// 	superAgent.post(url).set(options.headers).end(function(err, res) {
// 		console.log(err);
// 		// console.log(res);
// 	});
// };
console.log('begin bombard');
co(function*() {
    for (var i = 0; i < 20; i++) {
        console.log('iterator~:' + i);
        bombard();
    }
    console.log('over games ~');
});

function bombard() {
    return new Promise((resolve, reject) => {
        superAgent.post(url).set(headers).end(function (err, res) {
            count++;

            // mark = mark === false;
            console.log(res.body);
            console.log('bombard times:' + count);
            resolve(1);
        });
    });
}

//182.92.85.186:3000
// /* wrk -t12 -c100 -d30s -T30s --script=post.lua --latency http://localhost:3000/api/p/user/plaza/photographer
//  /* wrk -t6 -c50 -d30s -T30s --script=post.lua --latency http://182.92.85.186:3000/api/p/user/plaza/photographer
