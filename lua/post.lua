wrk.method = "POST"
#wrk -t6 -c50 -d30s -T30s --script=post.lua --latency http://182.92.85.186:3000/api/p/user/plaza/photographer
