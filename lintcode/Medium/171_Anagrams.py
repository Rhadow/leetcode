class Solution:
    # @param strs: A list of strings
    # @return: A list of strings
    def generatePrimeMap(self, n):
        result = {'a': 2}
        i = 3
        order = ord('b')
        isPrime = True
        while (len(result) < n):
            for c, prime in result.iteritems():
                if i % prime == 0:
                    isPrime = False

            if (isPrime):
                result[chr(order)] = i
                order += 1
            isPrime = True
            i += 1
        return result



    def anagrams(self, strs):
        prime_map = self.generatePrimeMap(26)
        result_map = {}

        for str in strs:
            result = 1
            for c in list(str):
                result *= prime_map[c]

            if (result in result_map):
                result_map[result].append(str)
            else:
                result_map[result] = [str]


        result = []

        for key in result_map:
            if (len(result_map[key]) > 1):
                result += result_map[key]

        return result
