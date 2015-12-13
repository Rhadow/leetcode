/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = [0];
    var primes = [];
    var min;

    for (var k = 1; k <= n; k++) {
        primes.push(k * k);
    }
    for (var i = 1; i <= n; i++) {
        min = Infinity;
        for (var j = 0; primes[j] <= i; j++) {
            min = min < dp[i - primes[j]] + 1 ? min : dp[i - primes[j]] + 1
        }
        dp[i] = min;
    }

    return dp[n];
};
