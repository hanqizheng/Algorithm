

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
var sortArray = function (nums) {
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
var sortArray = function (nums) {
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
var sortArray = function (nums) {
  // 这里的i上来就 = 1是因为插入排序是要往遍历指针(也就是i)前面插入的
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i]
    let j = i - 1
    // 这个循环是在腾出插入的位置(要插入位置后面的元素全部向后移动一位)
    while (j >= 0) {
      // 我们要将这个temp插入到某个位置，而这个位置的判断就是
      // 当temp大于前面一个元素，也就是现在的num[j]时，说明temp应该插在num[j]后面构成升序
      // 我们就应该跳出循环
      if (temp >= nums[j])
        break
      // 如果走到这里，说明temp还没有找到插入的位置，需要继续将元素后移，所以
      nums[j + 1] = nums[j]
      j--
    }
    // 这个j+1是因为， 我们找temp插入的位置时，只要temp大于了前面那个元素，说明temp应该插在那个元素的后面构成升序
    // 而那个元素，正是这个循环里的nums[j],所以我们直接插入在他的后面也就是nums[j + 1] = temp
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

// 归并排序
var sortArray = function (nums) {
  if (nums.length < 2) return nums

  let mid = nums.length >> 1
  let left = nums.slice(0, mid)
  let right = nums.slice(mid, nums.length)
  return merge(sortArray(left), sortArray(right)) 
}

function merge(left, right) {
  
}

// 希尔排序(其实就是一种高效的插入排序)
var sortArray = function (nums) {
  let len = nums.length
  for (let step = len >> 1; step > 0; step >>= 1) {
      // 从这里开始就是插入排序，只是把i跟step联系在一起
      for (let i = step; i < len; i++) {
          let temp = nums[i]
          let j = i - step
          while( j >= 0) {
              if (nums[j] < temp) break
              nums[j + step] = nums[j]
              j -= step
          }
          nums[j + step] = temp
      }
  }
  return nums
};