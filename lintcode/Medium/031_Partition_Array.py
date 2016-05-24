class Solution:
    """
    @param nums: The integer array you should partition
    @param k: As description
    @return: The index after partition
    """
    def partitionArray(self, nums, k):
        # write your code here
        # you should partition the nums by k
        # and return the partition index as description
        l = 0
        r = len(nums) - 1
        while (l <= r):
            while (l <= r and nums[l] < k):
                l += 1
            while (l <= r and nums[r] >= k):
                r -= 1
            if (l < r):
                temp = nums[l]
                nums[l] = nums[r]
                nums[r] = temp            
        return l
