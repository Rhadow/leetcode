class Solution:
    # @param nums: The integer array
    # @param target: Target number to find
    # @return the first position of target in nums, position start from 0
    def binarySearch(self, nums, target):
        # write your code here
        l, r = 0, len(nums) - 1
        result = -1
        while (l <= r):
            i = (l + r) / 2
            if (nums[i] == target):
                result = i
                r = i - 1
            elif (nums[i] < target):
                l = i + 1
            else:
                r = i - 1
        return result
