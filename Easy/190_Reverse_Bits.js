/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var binaryN = (n >>> 0).toString(2);

    while (binaryN.length < 32) {
        binaryN = '0' + binaryN;
    }

    return parseInt(binaryN.split('').reverse().join(''), 2);
};
