var quickSort = function(arr) {
    var mid = arr[0];
    var left = [];
    var right = [];

    if (arr.length < 2) {
        return arr;
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([mid]).concat(quickSort(right));
};
