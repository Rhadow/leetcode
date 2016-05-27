class Solution:
    """
    @param a, b, n: 32bit integers
    @return: An integer
    """
    def fastPower(self, a, b, n):
        # write your code here
        res = 1
        while (n > 0):
            if (n % 2 == 1):
                res *= a % b
            n /= 2
            a *= a % b
        return (res % b);
