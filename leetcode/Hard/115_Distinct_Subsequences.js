/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var dp = [];
    for (var i = 0; i <= 1; i++) {
        var temp = [0];
        if (i === 0) {
           for (var j = 0; j <= s.length; j++) {
               temp[j] = 1;
            }
        }
        dp[i] = temp;
    }
    for (var i = 1; i <= t.length; i++) {
        for (var j = 1; j <= s.length; j++) {
            if (t[i - 1] !== s[j - 1]) {
                dp[1][j] = dp[1][j - 1];
            } else {
                dp[1][j] = dp[1][j - 1] + dp[0][j - 1];
            }
        }
        dp[0] = dp[1].slice(0);
    }

    return dp[1][s.length];
};
