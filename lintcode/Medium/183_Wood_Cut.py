class Solution:
    """
    @param L: Given n pieces of wood with length L[i]
    @param k: An integer
    return: The maximum length of the small pieces.
    """
    def woodCut(self, L, k):
        # write your code here
        max = 0
        for i in L:
            if (i > max):
                max = i
        l, r = 1, max
        result = 0
        while (l <= r):
            i = (l + r) / 2
            subtotal = sum([(length / i) for length in L])
            if (subtotal >= k):
                result = i
                l = i + 1
            elif (subtotal < k):
                r = i - 1
        return result
