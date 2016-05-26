class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        result = []
        index = -1
        map1 = {}
        map2 = {}

        for n1 in nums1:
            if (n1 in map1):
                map1[n1] += 1
            else:
                map1[n1] = 1

        for n2 in nums2:
            if (n2 in map2):
                map2[n2] += 1
            else:
                map2[n2] = 1


        for k1, v1 in map1.iteritems():
            if (k1 in map2):
                result += ([k1] * min(map1[k1], map2[k1]))

        return result
