/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var tmp = num.toString().split('').reduce(function(acc, x) { return acc + parseInt(x); }, 0);
    return num < 10 ? num : addDigits(tmp);
};
