/**
 * @param {number} n
 * @return {string}
 */
var findContestMatch = function(n) {
    let matches = [];
    for (let i = 1; i <= n; i++) {
        matches.push(i);
    }
    while (matches.length > 1) {
        let left = 0;
        let right = matches.length - 1;
        let temp = [];
        while (left < right) {
            temp.push(`(${matches[left]},${matches[right]})`);
            left += 1;
            right -= 1;
        }
        if (left === right) {
            temp.push(matches[left]);
        }
        matches = temp;
    }
    return matches[0];
};
