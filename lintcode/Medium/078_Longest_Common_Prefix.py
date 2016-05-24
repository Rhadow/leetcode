class Solution:
    # @param strs: A list of strings
    # @return: The longest common prefix
    def longestCommonPrefix(self, strs):
        # write your code here
        def commonPrefix(a, b):
            result = ""
            if (not a or not b):
                return result
            for index, char in enumerate(a):
                if (char == b[index]):
                    result += char
                else:
                    break
            return result
        if (len(strs) == 0):
            return ""
        result = reduce(commonPrefix, strs)
        return result
