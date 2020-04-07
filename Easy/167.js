
// 167. 两数之和 II - 输入有序数组
// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。


// 暴力法
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
    }
  }
};

// hash表方法
var twoSum = function (numbers, target) {
  const map = new Map()

  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i + 1)
  }

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [i + 1, map.get(target - numbers[i])]
    }
  }
};

// 双指针的方法
// 这个是利用到排序数组的特点了
var twoSum = function (numbers, target) {
  let q = numbers.length - 1
  let p = 0

  while (p < q) {
    if (numbers[p] + numbers[q] === target) {
      return [p + 1, q + 1]
    } else if (numbers[p] + numbers[q] > target) {
      q--
    } else {
      p++
    }
  }

  return [-1, -1]
};
