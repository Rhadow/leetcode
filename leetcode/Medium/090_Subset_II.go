func subsetsWithDup(nums []int) [][]int {
    result := [][]int{[]int{}}
    if len(nums) == 0 {
        return result
    }
    sort.Ints(nums)
    lastNum := nums[0]
    result = append(result, []int{nums[0]})
    lastLength := 1

    for i := 1; i < len(nums); i++ {
        newSubSet := [][]int{}
        currentNum := nums[i]
        startIndex := 0
        if currentNum == lastNum {
            startIndex = lastLength
        }
        for j := startIndex; j < len(result); j++ {
            temp2 := make([]int, len(result[j]))
            copy(temp2, result[j])
            temp := append(temp2, currentNum)
            newSubSet = append(newSubSet, temp)
        }
        lastLength = len(result)
        result = append(result, newSubSet...)
        lastNum = currentNum
    }
    return result
}
