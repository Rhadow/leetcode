class Solution:
    """
    @param A: sorted integer array A which has m elements,
              but size of A is m+n
    @param B: sorted integer array B which has n elements
    @return: void
    """
    def mergeSortedArray(self, A, m, B, n):
        # write your code here
        i = m - 1
        j = n - 1
        k = m + n - 1
        if (len(B) == 0):
            return A
        while (k >= 0):
            if ((i >= 0 and A[i] > B[j]) or j < 0):
                A[k] = A[i]
                i -= 1
                k -= 1
            else:
                A[k] = B[j]
                j -= 1
                k -= 1
        return A
