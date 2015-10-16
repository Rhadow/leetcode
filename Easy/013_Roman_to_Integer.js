/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var dict = {
        'i': 1,
        'v': 5,
        'x': 10,
        'l': 50,
        'c': 100,
        'd': 500,
        'm': 1000
    };
    var result = 0;
    s.toLowerCase().split('').forEach(function(c, i, a) {
        if (dict[a[i + 1]] > dict[a[i]]) {
            result -= dict[a[i]];
        } else {
            result += dict[a[i]];
        }
    });

    return result;
};
