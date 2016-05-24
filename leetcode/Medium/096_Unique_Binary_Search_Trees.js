/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = [0, 1];
    var less = 0;
    var more = 0;

    dp[n] = dp[n] || 0;
    for (var i = 1; i <= n; i++) {
        less = i - 1;
        more = n - i;
        if (!dp[less]) {
            dp[less] = numTrees(less)
        }
        if (!dp[more]) {
            dp[more] = numTrees(more)
        }
        if (dp[less] === 0) {
            dp[n] += dp[more];
        } else if (dp[more] === 0) {
            dp[n] += dp[less];
        } else {
            dp[n] += (dp[more] * dp[less]);
        }
    }

    return dp[n];
};
