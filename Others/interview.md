
# JS基础

- `1 && 0`的结果是什么？ `1 || 0`呢？ `{} == 0`的结果是什么？ `[] == 0` 呢？
- JS变量是怎么存储的？
- 那些数值会在转换Boolean类型时返回false？
- ES6用过哪些特性？

> 只有6种。 undefined, null, +0, -0, NaN, ''

# CSS
- 有哪些行内元素，块级元素
- 用过float吗？flex呢？
- 垂直水平居中
- 选择器的优先级
- 盒模型
- 说说这些单位， `px | rem | vw,vh`

# React

- useState是如何保持同步执行？或者说如何按顺序执行的？你看过useState或者其他hooks的源码吗？
- useEffect的第二个参数是干什么用的？
- useEffect里面可以用async/await吗？
- 现在有两个state，如何做到a变界面刷新不刷新b？

> 就是拿useCallback去包裹b的改变操作，然后把依赖项设置成b就能打到a改变不会渲染b的效果了


- hooks是如何获取Redux中的全局变量的？
- 自己写一个有局部更新state的custom hooks，支持参数是一个`(preState) => { ... }`

# React Native
- 你用过React Native说下和React有什么区别？

# Git
- reabse 和 merge的区别？ 哪个更好呢？
- 听说过 `git cherry-pick`吗？

# 算法
- 判断两个链表是否有交点？出了hash map的方法你还有别的方法吗？
- 按层遍历二叉树
- 左右反转二叉树
- leetcode 56区间合并
- 找公公祖先