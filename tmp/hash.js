public long DEKHash(String str) {
  long hash = str.length();
  for (int i = 0; i < str.length(); i++) {
    hash = ((hash << 5) ^ (hash >> 27)) ^ str.charAt(i);
  }
  return hash;
}


function DEKHash(str) {
  var hash = str.length;
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) ^ (hash >> 27)) ^ str.charAt(i);
  }
  return hash;
}

//
// Q : public long DEKHash(String str) {
// long hash = str.length();
// for(int i = 0; i < str.length(); i++) {
// hash = ((hash << 5) ^ (hash >> 27)) ^ str.charAt(i);
// }
// return hash;
// }
// 18980963494
// 379209244336549656
// A :
// 请输入答案
// 提交答案
