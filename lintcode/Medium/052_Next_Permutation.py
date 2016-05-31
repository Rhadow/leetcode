class Solution:
    # @param num :  a list of integer
    # @return : a list of integer
    def nextPermutation(self, num):
        # write your code here

        # Version 1
        bp = -1
        for i in range(len(num) - 1):
            if (num[i] < num[i + 1]):
                bp = i
        if (bp == -1):
            num.reverse()
            return num
        rest = num[bp:]
        local_max = None
        for i in rest:
            if (i > rest[0] and (local_max is None or i < local_max)):
                local_max = i
        rest.pop(rest.index(local_max))
        rest = sorted(rest)
        return num[:bp] + [local_max] + rest

        # Version 2
        # i = len(num) - 1
        # target_index = None
        # second_index = None
        # while (i > 0):
        #     if (num[i] > num[i - 1]):
        #         target_index = i - 1
        #         break
        #     i -= 1
        # if (target_index is None):
        #     return sorted(num)
        # i = len(num) - 1
        # while (i > target_index):
        #     if (num[i] > num[target_index]):
        #         second_index = i
        #         break
        #     i -= 1
        # temp = num[target_index]
        # num[target_index] = num[second_index]
        # num[second_index] = temp
        # return num[:target_index] + [num[target_index]] + sorted(num[target_index + 1:])
