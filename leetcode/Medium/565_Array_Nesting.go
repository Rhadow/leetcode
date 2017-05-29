func arrayNesting(nums []int) int {
    result := 0
    stepMap := map[int]bool{}
    for i := range(nums) {
        tempIndex := i
        if _, ok := stepMap[tempIndex]; !ok {
            tempResult := 0
            _, found := stepMap[tempIndex];
            for !found {
                tempResult += 1
                stepMap[tempIndex] = true
                tempIndex = nums[tempIndex]
                _, found = stepMap[tempIndex]
            }
            if tempResult > result {
                result = tempResult
            }
        }
    }
    return result
}
