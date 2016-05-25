class Solution:
    #@param A: An integers list.
    #@return: return any of peek positions.
    def findPeak(self, A):
        # write your code here
        start, end = 0, len(A) - 1
        while (start <= end):
            mid = (start + end) / 2
            if (A[mid] > A[mid - 1] and A[mid] > A[mid + 1]):
                return mid
            elif (A[mid + 1] > A[mid - 1]):
                start = mid + 1
            else:
                end = mid - 1
