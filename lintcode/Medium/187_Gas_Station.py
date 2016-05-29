class Solution:
    # @param gas, a list of integers
    # @param cost, a list of integers
    # @return an integer
    def canCompleteCircuit(self, gas, cost):
        # write your code here

        # Solution 1
        total_left_gas = 0
        sum = 0
        res = 0
        for i in range(len(gas)):
            sum = sum + gas[i] - cost[i]
            if (sum < 0):
                sum = 0
                res = i + 1
            total_left_gas += gas[i] - cost[i]
        return -1 if total_left_gas < 0 or res >= len(gas) else res
