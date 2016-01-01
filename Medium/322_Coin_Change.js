/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = [0];
    var min = [];

    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (coins[j] <= i && dp[i - coins[j]] !== -1) {
                min.push(dp[i - coins[j]] + 1);
            }
        }
        if (min.length === 0) {
            dp[i] = -1;
        } else {
            dp[i] = min.reduce(function(a, b) {return a < b ? a : b;});
        }
        min = [];
    }
    return dp[dp.length - 1];
};
