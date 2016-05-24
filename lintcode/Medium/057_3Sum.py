class Solution:
    """
    @param numbersbers : Give an array numbersbers of n integer
    @return : Find all unique triplets in the array which gives the sum of zero.
    """
    def threeSum(self, numbers):
        # write your code here
        result = []
        sorted_numbers = sorted(numbers)
        for i in range(len(sorted_numbers)):
            left = i + 1
            right = len(sorted_numbers) - 1
            while (left < right):
                sums = sorted_numbers[i] + sorted_numbers[left] + sorted_numbers[right]
                if (sums == 0 and [sorted_numbers[i], sorted_numbers[left], sorted_numbers[right]] not in result):
                    result.append([sorted_numbers[i], sorted_numbers[left], sorted_numbers[right]])
                    left += 1
                elif (sums > 0):
                    right -= 1
                else:
                    left += 1
        return result
