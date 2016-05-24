/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var ans = [1,1,2];

    for (var i = 3; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }

    return ans[n];
};
