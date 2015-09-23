/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return (n >>> 0).toString(2).split('').filter(function(i) { return i === '1'; }).length;
};
