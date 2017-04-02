/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a.length === b.length) {
        return a === b ? -1 : a.length;
    }
    return a.length > b.length ? a.length : b.length;
};
