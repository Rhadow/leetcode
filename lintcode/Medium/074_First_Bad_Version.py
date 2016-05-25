#class SVNRepo:
#    @classmethod
#    def isBadVersion(cls, id)
#        # Run unit tests to check whether verison `id` is a bad version
#        # return true if unit tests passed else false.
# You can use SVNRepo.isBadVersion(10) to check whether version 10 is a
# bad version.
class Solution:
    """
    @param n: An integers.
    @return: An integer which is the first bad version.
    """
    def findFirstBadVersion(self, n):
        # write your code here
        start, end = 1, n
        if (n == 1):
            return 1
        while (start <= end):
            i = (start + end) / 2
            if (not SVNRepo.isBadVersion(i)):
                start = i + 1
            else:
                end = i - 1
        return start
