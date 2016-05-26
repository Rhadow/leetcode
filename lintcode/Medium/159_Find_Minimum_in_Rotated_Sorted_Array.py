class Solution:
    # @param num: a rotated sorted array
    # @return: the minimum number in the array
    def findMin(self, num):
        # write your code here

        # Solution 1
        # start, end = 0, len(num) - 1
        # if (num[start] < num[end]):
        #     return num[start]
        # while (start < end):
        #     i = (start + end) / 2
        #     if (num[i] > num[start]):
        #         start = i
        #     else:
        #         end = i
        # return num[start + 1]

        # Solution 2
        start, end = 0, len(num) - 1
        left = num[start]
        if (num[start] < num[end]):
            return num[start]
        while (start <= end):
            i = (start + end) / 2
            if (num[i] >= num[start]):
                left = min(num[start], num[end], left)
                start = i + 1
            else:
                left = num[i]
                end = i - 1
        return left
