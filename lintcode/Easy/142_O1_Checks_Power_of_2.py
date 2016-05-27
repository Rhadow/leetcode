class Solution:
    """
    @param n: An integer
    @return: True or false
    """
    def checkPowerOf2(self, n):
        # write your code here
        if (n < 1):
            return False
        else:
            return bin(0xffffffff & n).count('1') == 1
