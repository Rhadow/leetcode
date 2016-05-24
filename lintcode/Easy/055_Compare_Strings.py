class Solution:
    """
    @param A : A string includes Upper Case letters
    @param B : A string includes Upper Case letters
    @return :  if string A contains all of the characters in B return True else return False
    """
    def compareStrings(self, A, B):
        word_map_A = {}
        word_map_B = {}
        for c in list(A):
            if word_map_A.get(c) is not None:
                word_map_A[c] += 1
            else:
                word_map_A[c] = 1
        for c in list(B):
            if word_map_B.get(c) is not None:
                word_map_B[c] += 1
            else:
                word_map_B[c] = 1
        for key, value in word_map_B.iteritems():
            if (word_map_A.get(key) is None):
                return False
            elif (word_map_A[key] < value):
                return False
        return True
