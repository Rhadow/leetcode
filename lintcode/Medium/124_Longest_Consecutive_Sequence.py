class Solution:
    """
    @param num, a list of integer
    @return an integer
    """
    def longestConsecutive(self, num):
        # write your code here
        hashMap = {}
        res = 0
        for n in num:
            hashMap[n] = False
        for k in hashMap:
            tmp = k - 1
            tmpRes = 1
            while (tmp in hashMap and not hashMap[tmp]):
                hashMap[tmp] = True
                tmp -= 1
                tmpRes += 1
            tmp = k + 1
            while (tmp in hashMap and not hashMap[tmp]):
                hashMap[tmp] = True
                tmp += 1
                tmpRes += 1
            res = res if tmpRes < res else tmpRes12
        return res
