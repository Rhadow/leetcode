/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let segments = [];
    let lastIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % k === 0) {
            segments.push(s.slice(lastIndex, i));
            lastIndex = i;
        }
    }
    segments.push(s.slice(lastIndex));
    return segments.map((segment, i) => {
        return i % 2 === 0 ? segment : reverse(segment)
    }).join('');
};

function reverse(str) {
    if (!str) {
        return '';
    }
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
