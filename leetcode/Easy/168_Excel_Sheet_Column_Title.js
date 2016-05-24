/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (n < 1) {
        return '';
    }
    if (n % 26 === 0) {
        return convertToTitle((n - 26) / 26) + 'Z';
    }
    if (n < 26) {
        return String.fromCharCode(64 + n);
    }
    return convertToTitle(Math.floor(n / 26)) + String.fromCharCode(64 + n % 26)
};
