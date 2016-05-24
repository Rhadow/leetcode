class Solution:
    """
    @param A: A list of integers
    @param elem: An integer
    @return: The new length after remove
    """
    def removeElement(self, A, elem):
        # write your code here
        pointerA = 0
        pointerB = len(A) - 1
        while (pointerA <= pointerB):
            if (A[pointerB] == elem):
                pointerB -= 1
            elif (A[pointerA] == elem):
                temp = A[pointerA]
                A[pointerA] = A[pointerB]
                A[pointerB] = temp
            else:
                pointerA += 1
        return pointerA
