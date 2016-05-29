class Solution:
    #@param num: A list of non negative integers
    #@return: A string
    def largestNumber(self, num):
        # write your code here
        def quickSort(arr):
            if (len(arr) <= 1):
                return arr
            mid = str(arr[0])
            smaller = filter(lambda a: str(a) + mid > mid + str(a), arr[1:])
            larger = filter(lambda a: str(a) + mid <= mid + str(a), arr[1:])
            return quickSort(smaller) + [mid] + quickSort(larger)
        sorted_num = quickSort(num)
        sorted_num = map(lambda a: str(a), sorted_num)
        res = ''.join(sorted_num)
        return "0" if int(res) == 0 else res
