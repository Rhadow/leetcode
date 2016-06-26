class Solution:
    """
    @param {int} n an integer.
    @return {int} the nth prime number as description.
    """
    def nthUglyNumber(self, n):
        # write your code here
        uglies = [1]
        index0, index1, index2 = 0, 0, 0
        while(len(uglies) < n):
            nextNum = min(uglies[index0] * 2, uglies[index1] * 3, uglies[index2] * 5)
            if (nextNum == uglies[index0] * 2):
                index0 += 1
            if (nextNum == uglies[index1] * 3):
                index1 += 1
            if (nextNum == uglies[index2] * 5):
                index2 += 1
            uglies.append(nextNum)
        return uglies[-1]
