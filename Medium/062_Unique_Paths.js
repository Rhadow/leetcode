/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = [];

    if (m <= 1 && n <= 1) {
        return 1;
    }
    for (var i = 0; i < n; i++) {
        dp[i] = [];
        for (var j = 0; j < m; j++) {
            if (i === 0) {
                dp[i][j] = j === 0 ? 0 : 1;
            } else if (j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[n - 1][m - 1];
};
