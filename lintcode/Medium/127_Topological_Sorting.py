# Definition for a Directed graph node
# class DirectedGraphNode:
#     def __init__(self, x):
#         self.label = x
#         self.neighbors = []

class Solution:
    """
    @param graph: A list of Directed graph node
    @return: A list of graph nodes in topological order.
    """
    def topSort(self, graph):
        # write your code here
        def dfs(node, nodeMap, ans):
            ans.append(node)
            nodeMap[node] = None
            for n in node.neighbors:
                nodeMap[n] -= 1
                if (nodeMap[n] == 0):
                    dfs(n, nodeMap, ans)
        res = []
        nodeMap = {}
        for node in graph:
            if (node not in nodeMap):
                nodeMap[node] = 0
            for neighbor in node.neighbors:
                if (neighbor in nodeMap):
                    nodeMap[neighbor] += 1
                else:
                    nodeMap[neighbor] = 1
        for k in nodeMap:
            if (nodeMap[k] == 0):
                dfs(k, nodeMap, res)
        return res
