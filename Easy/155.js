
// 155. 最小栈
// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。
// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.


var MinStack = function () {
  this.stack = []
  this.min = Number.MAX_SAFE_INTEGER
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  if (!this.stack.length) {
    this.min = x
    this.stack.push(x - this.min)
  } else {
    this.stack.push(x - this.min)
    if (x < this.min) {
      this.min = x
    }
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  if (!this.stack.length) return

  const tempPop = this.stack.pop()
  if (tempPop < 0) {
    this.min = this.min - tempPop
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  if (!this.stack.length) return

  const top = this.stack[this.stack.length - 1]

  return top < 0 ? this.min : this.min + top
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.min
};