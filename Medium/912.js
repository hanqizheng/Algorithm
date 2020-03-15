

// 给定一个整数数组 nums，将该数组升序排列。

//  

// 示例 1：

// 输入：[5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：

// 输入：[5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
//  

// 提示：

// 1 <= A.length <= 10000
// -50000 <= A[i] <= 50000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 冒泡排序
var sortArray = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] > nums[j]) {
              [nums[i], nums[j]] = [nums[j], nums[i]]
          }
      }
  }

  return nums
};

// 选择排序
var sortArray = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
      let min = nums[i]
      let minIndex = i
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] < min) {
              min = nums[j]
              minIndex = j
          }
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }
  return nums
};

// 插入排序
var sortArray = function(nums) {
  // 这里的i上来就 = 1是因为插入排序是要往遍历指针(也就是i)前面插入的
  for (let i = 1; i < nums.length; i++) {
      let temp = nums[i]
      let j = i - 1
      // 这个循环是在腾出插入的位置(要插入位置后面的元素全部向后移动一位)
      while (j >= 0) {
          // 如果发现此时j已经大于排序好的一个元素了，说明上一轮循环已经插入完毕了，退出循环
          if (temp >= nums[j])
              break
          // i前面的都是排序好的数组，现在要向里面插入一个
          // 首先从后往前找到自己 < nums[j]的时候，说明要向这里插入了
          // 后面的全部 j + 1 = j(我是指下标)
          // 不用害怕第一次，因为第一次是j把temp覆盖掉了
          nums[j + 1] = nums[j]
          j--
      }
      // 这时候temp应该插入到j还是j + 1呢？
      // 因为我们在寻找插入位置时，找到位置后又循环了一次才退出循环，所以应该插入到j + 1因为j多减了1
      nums[j + 1] = temp
  }

  return nums
};

// 插入排序无备注版
var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
      let temp = nums[i]
      let j = i - 1
      while (j >= 0) {
          if (temp >= nums[j])
              break
          nums[j + 1] = nums[j]
          j--
      }
      nums[j + 1] = temp
  }
  return nums
};

// 快速排序
var sortArray = function (nums) {
  if (nums.length < 2) return nums
  return quickSort(nums, 0, nums.length - 1)
};

function quickSort(nums, left, right) {
  if (left >= right) return
  let pivotIndex = partition(nums, left, right)
  quickSort(nums, left, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, right)
  return nums
}

function partition(nums, left, right) {
  let pivot = right
  let leftIndex = left
  for (let i = left; i < right; i++) {
      if (nums[i] < nums[pivot]) {
          [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]]
          leftIndex++
      }
  }
  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]]
  return leftIndex
}