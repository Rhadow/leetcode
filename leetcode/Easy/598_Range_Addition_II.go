func maxCount(m int, n int, ops [][]int) int {
    if len(ops) == 0 {
        return m * n
    }
    temp := []int{ops[0][0], ops[0][1]}
    for _, op := range(ops) {
        if op[0] < temp[0] {
            temp[0] = op[0]
        }
        if op[1] < temp[1] {
            temp[1] = op[1]
        }
    }
    return temp[0] * temp[1]
}
