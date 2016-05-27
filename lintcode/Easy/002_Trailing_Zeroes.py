class Solution:
    # @param n a integer
    # @return ans a integer
    def trailingZeros(self, n):
        result = 0
        while (n > 0):
            n /= 5
            result += n
        return result
