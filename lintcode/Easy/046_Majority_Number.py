class Solution:
    """
    @param nums: A list of integers
    @return: The majority number
    """
    def majorityNumber(self, nums):
        # write your code here

        # Solution 1
        # map = {}
        # for i in nums:
        #     if (i in map):
        #         map[i] += 1
        #     else:
        #         map[i] = 1
        # for k, v in map.iteritems():
        #     if (v > len(nums) / 2):
        #         return k

        # Solution 2 - Moore's Voting Algorithm
        vote = 0
        for i in nums:
            if (vote == 0):
                candidate = i
                vote += 1
            elif (i == candidate):
                vote += 1
            else:
                vote -= 1
        return candidate
