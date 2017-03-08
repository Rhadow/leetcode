/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    const map = {};
    let startIndex = 0;
    s.split('').forEach((char, index) => {
        if (char in map) {
            tempResult = map[char] >= startIndex ? index - map[char] : index - startIndex + 1
            startIndex = startIndex > map[char] + 1 ? startIndex : map[char] + 1;
        } else {
            tempResult = index - startIndex + 1;
        }
        map[char] = index;
        result = result > tempResult ? result : tempResult;
    });
    return result;
};
