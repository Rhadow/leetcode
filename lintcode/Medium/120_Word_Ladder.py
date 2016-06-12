class Solution:
    # @param start, a string
    # @param end, a string
    # @param dict, a set of string
    # @return an integer
    def ladderLength(self, start, end, dict):
        # write your code here
        queue = [start]
        level = 1
        levelIndex = 0
        dict.add(end)
        while (queue):
            currentStr = queue.pop(0)
            if (currentStr == end):
                return level
            i = 0
            while (i < len(currentStr)):
                for j in range(97, 123):
                    tmp = currentStr[:i] + chr(j) + currentStr[i+1:]
                    if (tmp in dict):
                        queue.append(tmp)
                        dict.remove(tmp)
                i += 1
            levelIndex -= 1
            if (levelIndex <= 0):
                level += 1
                levelIndex = len(queue)
        return 0
