/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const sumMap = new Map();

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (sumMap.has(target - nums[i])) {
      result = [sumMap.get(target - nums[i]), i];
    } else {
      sumMap.set(nums[i], i);
    }
  }

  return result;
};
