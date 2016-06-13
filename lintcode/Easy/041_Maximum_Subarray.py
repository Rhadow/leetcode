class Solution:
    """
    @param nums: A list of integers
    @return: An integer denote the sum of maximum subarray
    """
    def maxSubArray(self, nums):
        # write your code here
        localMax = nums[0]
        res = nums[0]
        for i in range(1, len(nums)):
            localMax = max(localMax + nums[i], nums[i])
            res = max(res, localMax)
        return res
