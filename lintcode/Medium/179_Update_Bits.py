class Solution:
    #@param n, m: Two integer
    #@param i, j: Two bit positions
    #return: An integer
    def updateBits(self, n, m, i, j):
        # write your code here
        def twosComplement(num):
            result = num
            if (result < 0):
                result *= -1
                result = result ^ 0xffffffff
                result += 1
            return result
        n = twosComplement(n)
        m = twosComplement(m)
        mask = ''
        for k in range(32):
            if (k <= j and k >= i):
                mask = '0' + mask
            else:
                mask = '1' + mask
        mask = int(mask, 2)
        m = m << i
        n = n & mask
        n = n | m
        if (n >> 31 == 1):
            n -= 1
            n = n ^ 0xffffffff
            n *= -1
        return n
