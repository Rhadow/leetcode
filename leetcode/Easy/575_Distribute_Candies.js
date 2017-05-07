/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const limit = candies.length / 2;
    const map = {};
    candies.forEach(n => {
        if (!(n in map)) {
            map[n] = 1;
        }
    });
    const distinctTypes = Object.keys(map).length;
    return distinctTypes <= limit ? distinctTypes : limit;
};
