class Solution:
    """
    @param s: The first string
    @param b: The second string
    @return true or false
    """
    def anagram(self, s, t):
        word_map1 = {}
        word_map2 = {}
        if len(s) != len(t):
            return False
        for c in list(s):
            if word_map1.get(c) is None:
                word_map1[c] = 1
            else:
                word_map1[c] += 1
        for c in list(t):
            if word_map2.get(c) is None:
                word_map2[c] = 1
            else:
                word_map2[c] += 1
        for key, value in word_map1.iteritems():
            if word_map2.get(key) != value:
                return False
        return True
