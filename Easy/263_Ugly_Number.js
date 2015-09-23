/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    var uglies = [5, 3, 2, 1];
    var result = uglies.some(function(n) {
        return n === num;
    });
    if (!result && num !== 0) {
       for (var i = 0; i < uglies.length - 1; i++) {
            if (num % uglies[i] === 0) {
                return isUgly(num / uglies[i]);
            }
        }
    }
    return result;
};
