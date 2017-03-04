function heapSort(arr) {
  let lastIndex = arr.length - 1;
  createMaxHeap(arr, lastIndex);
  while (lastIndex >= 0) {
    swap(arr, 0, lastIndex);
    lastIndex -= 1;
    maxHeapify(arr, 0, lastIndex);
  }
}

function createMaxHeap(arr, maxLength) {
  let index = (maxLength - (maxLength % 2 === 0 ? 2 : 1)) / 2;
  for (index; index >= 0; index--) {
    maxHeapify(arr, index, maxLength);
  }
}

function maxHeapify(arr, index, maxLength) {
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;
  let largestIndex;
  if (leftIndex <= maxLength && arr[leftIndex] > arr[index]) {
    largestIndex = leftIndex;
  } else {
    largestIndex = index;
  }
  if (rightIndex <= maxLength && arr[rightIndex] > arr[largestIndex]) {
    largestIndex = rightIndex;
  }
  if (largestIndex !== index) {
    swap(arr, index, largestIndex);
    maxHeapify(arr, largestIndex, maxLength);
  }
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
