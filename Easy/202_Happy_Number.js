/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var history = [],
        temp;

    function calc(num) {
        return ('' + num).split('').reduce(function(acc, x) {return acc + Math.pow(+x, 2)}, 0);
    }
    function hasRepeatedValue(arr) {
        var sortedArr = arr.sort();
        for (var j = 0; j < sortedArr.length - 1; j++) {
            if (sortedArr[j] === sortedArr[j + 1]) {
                return true;
            }
        }
        return false;
    }

    temp = calc(n);
    history.push(temp);

    while (temp !== 1 && !hasRepeatedValue(history)) {
        temp = calc(temp);
        history.push(temp);
    }

    return history.indexOf(1) >= 0 ? true : false;
};
