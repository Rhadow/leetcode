class Solution:
    """
    @param x: An integer
    @return: The sqrt of x
    """
    def sqrt(self, x):
        l = 0
        r = x / 2
        if (x < 0):
            return -1
        while (l <= r):
            i = (l + r) / 2
            next = i + 1
            if (i * i == x):
                return i
            elif (next * next == x):
                return next
            elif ((i * i < x) and (next * next > x)):
                return i
            elif (next * next < x):
                l = i + 1
            else:
                r = i - 1
