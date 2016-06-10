class Solution:
    """
    @param nums: A list of Integers.
    @return: A list of permutations.
    """
    def permute(self, nums):
        # write your code here

        # Recursion
        if (not nums):
            return []
        if (len(nums) == 1):
            return [nums]
        res = []
        for i in range(len(nums)):
            tmpRes = self.permute(nums[:i] + nums[i+1:])
            for j, a in enumerate(tmpRes):
                tmpRes[j] = [nums[i]] + a
            res += tmpRes
        return res

        # Next Permutation
        # def nextPermutation(arr):
        #     result = [] + arr
        #     i = len(result) - 1
        #     while (i >= 0):
        #         if (result[i] > result[i - 1]):
        #             i -= 1
        #             break
        #         i -= 1
        #     if (i < 0):
        #         return None
        #     j = len(result) - 1
        #     while (j > 0):
        #         if (result[j] > result[i]):
        #             break
        #         j -= 1
        #     tmp = result[i]
        #     result[i] = result[j]
        #     result[j] = tmp
        #     tmp = result[i+1:]
        #     tmp.reverse()
        #     return result[:i+1] + tmp
        #
        # if not nums:
        #     return []
        # nums = sorted(nums)
        # res = []
        # res.append(nums)
        # nextPerm = nextPermutation(nums)
        # while (nextPerm):
        #     res.append(nextPerm)
        #     nextPerm = nextPermutation(nextPerm)
        # return res
