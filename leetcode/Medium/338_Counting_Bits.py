class Solution(object):
    def countBits(self, num):
        """
        :type num: int
        :rtype: List[int]
        """
        res = [0]
        power = 1
        for i in range(1, num + 1):
            if (i % 2 == 1):
                res.append(res[i - 1] + 1)
            elif (i == 2 ** power):
                res.append(1)
                power += 1
            else:
                res.append(res[i / 2])
        return res
