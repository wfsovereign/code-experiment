

function treeSum(left, right) {
    var one = 0, two = 0;
    if (left && typeof left != 'number' && typeof left != 'string') {
        console.log(typeof left);
        console.log('left: ', left);
        one = treeSum(left[0], left[1]);
    } else one = left || 0;
    if (right && typeof right != 'number' && typeof right != 'string') two = treeSum(right[0], right[1]);
    else two = right || 0;
    console.log('mid: ', one, ' ', two);
    return one + two;
}

waitCalculateTree = [[1, [2, 3]], [4, [5, [6, 7]]]];


console.log('binary tree result :', treeSum(waitCalculateTree[0], waitCalculateTree[1]));
