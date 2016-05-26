class Solution:
    """
    @param A : a list of integers
    @param target : an integer to be searched
    @return : a list of length 2, [index1, index2]
    """
    def searchRange(self, A, target):
        # write your code here
        i = -1
        j = -1
        start, end = 0, len(A) - 1
        while (start <= end):
            mid = (start + end) / 2
            if (mid == 0 and A[mid] == target) or (A[mid] == target and A[mid - 1] < target):
                i = mid
                break
            elif (A[mid] >= target):
                end = mid - 1
            else:
                start = mid + 1
        start, end = 0, len(A) - 1
        while (start <= end):
            mid = (start + end) / 2
            if (mid == len(A) - 1 and A[mid] == target) or (A[mid] == target and A[mid + 1] > target):
                j = mid
                break
            elif (A[mid] > target):
                end = mid - 1
            else:
                start = mid + 1
        return [i, j]
