HR在给候选人安排面试时，需要参考面试官的日程和偏好，比如几点到几点面试官要开会，几点到几点面试官要吃饭。为了便于查看，系统会自动将面试官的所有不可用时间段进行合并展示。

现在定义区间的数据格式如下：
/**
 * @typedef Range 
 * @property {number} start - 区间的开始时间
 * @property {number} end - 代表区间的结束时间
 */

第一问
任意给定两个区间，写一个函数isOverlapped判断这两个区间是否有重叠（不存在非法数据，区间都是闭区间）。
/**
 * @param {Range} first - 第一个区间
 * @param {Range} second - 第二个区间
 * @return {boolean} 是否重叠
 */
function isOverlapped(first, second) {
  // TODO
  if (second.start < first.end) return true
}

// test case
const a = { start: 3, end: 5 };
const b = { start: 4, end: 6 };
const c = { start: 7, end: 8 };

isOverlapped(a, b); // true
isOverlapped(b, c); // false

第二问
定义区间的合并操作是：如果两个区间是重叠的，取两个区间的最小start作为合并后区间的start，最大end作为合并后区间的end，合并后的区间会替换掉原来的两个区间。如果两个区间没有重叠，则保持原状。
现在给定任意个区间，写一个函数merge对这些区间进行合并操作，直到无法继续合并为止，输出结果。
/**
 * @param {Range[]} intervals - 若干个区间
 * @return {Range[]} 合并后的区间
 */
function merge(intervals) {
  // TODO
  for(let i = 0; i < intervals.length - 1; i++) {
    if (!intervals[i]) continue
    const temp = intervals[i]
    let j = i + 1
    for (; j < intervals.length; j++) {
      if (temp[i].end > intervals[j].start ||
          intervals[j].end > temp[i].start) {
t             temp = {
              start: Math.min(intervals[i].start, intervals[j].start)
              end: Math.max(intervals[i].end, intervals[j].end)
            }
            intervals[j] = undefined
      } else {
        break;
      }
    }
    i = j
    
  }
  return intervals.filter(item => item !== undefined)
}

// test case
const a = { start: 3, end: 5 };
const b = { start: 4, end: 6 };
const c = { start: 7, end: 8 };

merge([a, b, c]); // [{ start: 3, end: 6 }, { start: 7, end: 8 }]
