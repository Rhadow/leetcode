/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    function swap(a,b,arr) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    function quickSort(n, a, b) {
        if (b <= a) {
            return;
        }
        var pivot = n[a];
        var j = a + 1;
        for (var i = j; i < n.length; i++) {
            if (n[i] < pivot) {
                swap(i, j, n);
                j++;
            }
        }
        swap(a, j - 1, n);
        quickSort(n, a, j - 2);
        quickSort(n, j, b);
    }
    quickSort(nums, 0, nums.length - 1);

    return nums[0];
};
