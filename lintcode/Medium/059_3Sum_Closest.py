class Solution:
    """
    @param numbers: Give an array numbers of n integer
    @param target : An integer
    @return : return the sum of the three integers, the sum closest target.
    """
    def threeSumClosest(self, numbers, target):
        # write your code here
        sorted_nums = sorted(numbers)
        final_result = 0
        diff = None
        for i, n in enumerate(sorted_nums):
            left = i + 1
            right = len(sorted_nums) - 1
            while (left < right):
                sums = sorted_nums[i] + sorted_nums[left] + sorted_nums[right]
                if (diff is None or abs(sums - target) < diff):
                    diff = abs(sums - target)
                    final_result = sums
                if (sums > target):
                    right -= 1
                elif(sums < target):
                    left += 1
                else:
                    return target
        return final_result
