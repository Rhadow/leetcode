class Solution:
    """
    @param n: An integer as description
    @return: A list of strings.
    For example, if n = 7, your code should return
        ["1", "2", "fizz", "4", "buzz", "fizz", "7"]
    """
    def fizzBuzz(self, n):
        result = []
        for i in range(1, n + 1):
            if (i % 3 == 0 and i % 5 == 0):
                result.append('fizz buzz')
            elif (i % 3 == 0):
                result.append('fizz')
            elif (i % 5 == 0):
                result.append('buzz')
            else:
                result.append(str(i))
        return result
