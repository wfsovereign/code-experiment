

function changeKeyAndValue(obj) {
  var keys = Object.keys(obj);
  var res = {};
  keys.forEach(key =>{
    res[obj[key]] = key;
  });
  return res;
}
