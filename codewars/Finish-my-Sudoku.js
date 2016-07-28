function doneOrNot(board) {
  var m = 'Finished!',
    failed = 'Try again!',
    mini = [];
  for (var i = 0; i < 9; i++) {
    if (!validateDuplication(board[i])) {
      m = failed;
      break;
    }
    var columnCache = [];
    for (var j = 0; j < 9; j++) {
      if (i < 3 && j < 3) {
        mini.push(board[i][j])
      }
      console.log('i: ', i, 'j:', j);
      columnCache.push(board[j][i]);
    }
    console.log('cache :', columnCache);
    console.log('mini :', mini);
    if (!validateDuplication(columnCache)) {
      m = failed;
      break;
    }
    if (!validateDuplication(mini) && mini.length === 9) {
      m = failed;
      break;
    }
  }

  function validateDuplication(arr) {
    return arr.length === 9 && arr.reduce((pre, cur) => {
      if (pre.includes(cur) || cur > 9 || cur <= 0) return pre;
      else {
        pre.push(cur);
        return pre;
      }
    }, []).length === arr.length;
  }
  return m;
}

var test = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var test1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

var test3 = [
  [0, 1, 2, 3],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

var test9 = [
  [4, 1, 7, 3, 6, 9, 8, 2, 5],
  [6, 3, 2, 1, 5, 8, 9, 4, 7],
  [9, 5, 8, 7, 2, 4, 3, 1, 6],
  [8, 2, 5, 4, 3, 7, 1, 6, 9],
  [7, 9, 1, 5, 8, 6, 4, 3, 2],
  [3, 4, 6, 9, 1, 2, 7, 5, 8],
  [2, 8, 9, 6, 4, 3, 5, 7, 1],
  [5, 7, 3, 2, 9, 1, 6, 8, 4],
  [1, 6, 4, 8, 7, 5, 2, 9, 3]
];

var test4 = [
  [1, 3, 2, 5, 7, 9, 4, 6, 8],
  [4, 9, 8, 2, 6, 1, 3, 7, 5],
  [7, 5, 6, 3, 8, 4, 2, 1, 9],
  [6, 4, 3, 1, 5, 8, 7, 9, 2],
  [5, 2, 1, 7, 9, 3, 8, 4, 6],
  [9, 8, 7, 4, 2, 6, 5, 3, 1],
  [2, 1, 4, 9, 3, 5, 6, 8, 7],
  [3, 6, 5, 8, 1, 7, 9, 2, 4],
  [8, 7, 9, 6, 4, 2, 1, 3, 5]
];

var test6 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
];

console.log('result :', doneOrNot(test6));

//
// var a = [5, 3, 4, 6, 7, 8, 9, 1, 2];
//
// b = a.reduce((pre, cur) => {
//   if (pre.includes(cur)) return pre;
//   else {
//     pre.push(cur);
//     return pre;
//   }
// }, []);
//
// console.log('-------------------');
// console.log(b.length === a.length);
