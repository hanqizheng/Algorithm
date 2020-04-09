/**
 * 
 * 给定一个含n(n >= 1) 个整数的数组，请设计一个在时间上尽可能高效的算法，找出数组中未出现的最小正整数。
 * 
 * 例如，数组 [-5, 3, 2, 3] 未出现的最小正整数就是1
 * 
 * [1, 2, 3]未出现的最小正整数就是4
 *
 * 
 */


function findSmallestNumber(nums) {
  const temp = new Array(nums.length)

  let i = 0

  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length) {
      // temp数组就是一个标记位数组，只会在nums出现过的整数 - 1的下标对应的位置标记位1
      temp[nums[i] - 1] = 1
    }
    i++
  }

  let j = 0
  while (j < nums.length) {
    if (temp[j] === undefined) break
    j++
  }

  return j + 1
}

console.log(findSmallestNumber([1, 2, 3, 4]))