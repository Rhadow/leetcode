class Solution:
    def strStr(self, source, target):
        if (not source):
            if (target == ''):
                return 0
            else:
                return -1
        if (not target and target != ''):
            return -1
        target_length = len(target)
        for i, c in enumerate(source):
            sub_str = source[i:i + target_length]
            if sub_str == target:
                return i
        return -1
