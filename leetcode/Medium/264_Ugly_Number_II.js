/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var uglies = [1],
        i1 = 0,
        i2 = 0,
        i3 = 0;

    while (uglies.length < n) {
        var nextUgly = Math.min(2 * uglies[i1], 3 * uglies[i2], 5 * uglies[i3]);
        uglies.push(nextUgly);

        if (uglies[uglies.length - 1] === 2 * uglies[i1]) {
            i1++;
        }
        if (uglies[uglies.length - 1] === 3 * uglies[i2]) {
            i2++;
        }
        if (uglies[uglies.length - 1] === 5 * uglies[i3]) {
            i3++;
        }
    }

    return uglies[n - 1];
};
