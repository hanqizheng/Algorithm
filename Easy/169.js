// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。



// 示例 1:

// 输入: [3,2,3]
// 输出: 3
// 示例 2:

// 输入: [2,2,1,1,1,2,2]
// 输出: 2

// hash map方法
var majorityElement = function (nums) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      Object.assign(map, { [nums[i]]: 1 })
    }
  }

  return Object.keys(map).find(item => map[item] > nums.length / 2)
};

// 如果将数组 nums 中的所有元素按照单调递增或单调递减的顺序排序，那么下标为 n/2 的元素一定是众数
var majorityElement = function (nums) {
  nums = nums.sort()
  return nums[nums.length >> 1]
};

// 投票算法，太巧秒了
var majorityElement = function (nums) {
  let count = 0
  let candidate;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
    }
    if (candidate === nums[i]) {
      count++
    } else {
      count--
    }
  }

  return candidate
};
