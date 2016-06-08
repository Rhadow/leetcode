class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        if (not nums):
            return [[]]
        tmpRes = self.subsets(nums[:len(nums) - 1])
        res += tmpRes
        for a in tmpRes:
            res.append(a + [nums[len(nums) - 1]])
        return res
