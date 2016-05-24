class Solution:
    """
    @param numbers : An array of Integer
    @param target : target = numbers[index1] + numbers[index2]
    @return : [index1 + 1, index2 + 1] (index1 < index2)
    """
    def twoSum(self, numbers, target):
        # Hash map
        # map = {}

        # for i, n in enumerate(numbers):
        #     map[n] = i + 1

        # for i, n in enumerate(numbers):
        #     rest = target - n
        #     if(rest in map and map[rest] > i):
        #         return [i + 1, map[rest]]

        # Two pointer
        sorted_numbers = sorted(numbers)
        l = 0
        r = len(numbers) - 1
        while (l < r):
            res = sorted_numbers[l] + sorted_numbers[r]
            if (res == target):
                i = 0
                l_index = None
                r_index = None
                while (i < len(numbers)):
                    if (numbers[i] == sorted_numbers[l]):
                        l_index = i + 1
                        break
                    elif (numbers[i] == sorted_numbers[r]):
                        r_index = i + 1
                        break
                    else:
                        i += 1
                i += 1
                while (i < len(numbers)):
                    if (l_index and numbers[i] == sorted_numbers[r]):
                        r_index = i + 1
                        break
                    elif (r_index and numbers[i] == sorted_numbers[l]):
                        l_index = i + 1
                        break
                    else:
                        i += 1
                return [l_index, r_index] if l_index < r_index else [r_index, l_index]
            elif (res < target):
                l += 1
            else:
                r -= 1
