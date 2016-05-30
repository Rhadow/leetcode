class Solution:
    """
    @param A: A positive integer which has N digits, A is a string.
    @param k: Remove k digits.
    @return: A string
    """
    def DeleteDigits(self, A, k):
        # write you code here
        c = 0
        res = A
        while (c < k):
            init = res[0]
            break_out = False
            for i in range(1, len(res)):
                if (int(res[i]) < int(res[i - 1])):
                    res = res[:i - 1] + res[i:]
                    break_out = True
                    break
            if (not break_out):
                res = res[:-1]
            c += 1
        i = 0
        c = 0
        while (c < len(res)):
            if (res[c] == "0" and c != len(res) - 1):
                i += 1
            if (res[c] != "0"):
                break
            c += 1
        return res[i:]
