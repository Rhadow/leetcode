/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charMap = {};

    alphabet.split('').forEach(function(v, i) {
        charMap[v] = i + 1;
    });

    s.split('').reverse().forEach(function(v, i) {
        result += Math.pow(26, i) * charMap[v];
    });

    return result;
};
