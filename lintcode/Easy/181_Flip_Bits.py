class Solution:
    """
    @param a, b: Two integer
    return: An integer
    """
    def bitSwapRequired(self, a, b):
        # write your code here
        return bin((a^b) & 0xffffffff).count('1')
