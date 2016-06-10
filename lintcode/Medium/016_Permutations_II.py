class Solution:
    """
    @param nums: A list of integers.
    @return: A list of unique permutations.
    """
    def permuteUnique(self, nums):
        # write your code here

        # Recursion
        # if (not nums):
        #     return [[]]
        # res = []
        # for i in range(len(nums)):
        #     firstIndex = nums.index(nums[i])
        #     if (firstIndex >= i):
        #         tmpRes = self.permuteUnique(nums[:i] + nums[i+1:])
        #         for j, a in enumerate(tmpRes):
        #             tmpRes[j] = [nums[i]] + a
        #         res += tmpRes
        # return res

        # Next Permutation
        def nextPermutation(arr):
            res = [] + arr
            i = len(res) - 1
            while (i >= 0):
                if (res[i] > res[i - 1]):
                    i -= 1
                    break
                i -= 1
            if (i < 0):
                return None
            j = len(res) - 1
            while (j >= 0):
                if (res[j] > res[i]):
                    break
                j -= 1
            tmp = res[i]
            res[i] = res[j]
            res[j] = tmp
            tmp = res[i+1:]
            tmp.reverse()
            return res[:i+1] + tmp

        if (not nums):
            return [[]]
        res = []
        nums = sorted(nums)
        res.append(nums)
        nextPerm = nextPermutation(nums)
        while (nextPerm):
            res.append(nextPerm)
            nextPerm = nextPermutation(nextPerm)
        return res
