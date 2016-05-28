class Solution:
    """
    @param A : an integer array
    @return : a integer
    """
    def singleNumber(self, A):
        # write your code here

        # Solution 1
        # arr = []
        # for i in A:
        #     if i in arr:
        #         arr.pop(arr.index(i))
        #     else:
        #         arr.append(i)
        # return arr[0] if len(arr) > 0 else 0

        # Solution 2
        res = 0
        for i in A:
            res = res ^ i
        return res
