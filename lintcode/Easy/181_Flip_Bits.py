class Solution:
    """
    @param a, b: Two integer
    return: An integer
    """
    def bitSwapRequired(self, a, b):
        # write your code here
        # Solution 1
        # return bin((a^b) & 0xffffffff).count('1')

        # Solution 2
        result = a ^ b
        if (result < 0):
            result *= -1
            result = result ^ (0xffffffff)
            result += 1
        return bin(result).count('1')
