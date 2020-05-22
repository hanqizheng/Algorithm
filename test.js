function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i
    let j = i + 1

    while (j < nums.length) {
      if (nums[j] < nums[min]) {
        min = j
      }
      j++
    }

    [nums[i], nums[min]] = [nums[min], nums[i]]
  }

  return nums
}

console.log(selectSort([3, 2, 4, 1, 5, 0, -5, 6, -1]))