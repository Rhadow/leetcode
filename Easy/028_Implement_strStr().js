/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle) {
        return 0;
    }
    for (var i = 0; i < haystack.length; i++) {
        if (i + needle.length > haystack.length) {
            break;
        }
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};
