class Solution:
    """
    @param A : a list of integers
    @param target : an integer to be searched
    @return : an integer
    """
    def search(self, A, target):
        # write your code here
        start, end = 0, len(A) - 1
        while(start <= end):
            i = (start + end) / 2
            if (A[i] == target):
                return i
            if (A[i] > A[start]):
                if(target >= A[start] and target < A[i]):
                    end = i - 1
                else:
                    start = i + 1
            elif (A[i] < A[start]):
                if(target > A[i] and target <= A[end]):
                    start = i + 1
                else:
                    end = i - 1
            else:
                start += 1
        return -1
