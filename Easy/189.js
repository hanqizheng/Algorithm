// 189. 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释: 
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。


// 暴力法
// 每次向后移动一个数字，循环k次
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    const temp = nums[nums.length - 1]
    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = temp
  }

  return nums
};


// 用一个临时数组
// 其实核心是这句 temp[(i + k) % nums.length] = nums[i]
var rotate = function (nums, k) {
  const temp = []

  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i]
  }

  return nums
};