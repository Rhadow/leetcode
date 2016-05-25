class Solution:
    # @param num: a rotated sorted array
    # @return: the minimum number in the array
    def findMin(self, num):
        # write your code here
        start, end = 0, len(num) - 1
        if (num[start] < num[end]):
            return num[start]
        while (start < end):
            i = (start + end) / 2
            if (num[i] > num[start]):
                start = i
            else:
                end = i
        return num[start + 1]
