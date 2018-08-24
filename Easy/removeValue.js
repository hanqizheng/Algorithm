var removeElement = function(nums, val) {
  let amount = 0;
  let result = [];
  for(let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          amount++;
          for(let j = i; j < nums.length - 1; j++) {
              nums[j] = nums[j + 1];
          } 
      }
  }
  for(let i = 0; i < nums.length - amount + 1; i++) {
    result[i] = nums[i];
  }

  let c = {
    result: result
  }
  return c.result;
};

let a = [3,2,2,3];
console.log(removeElement(a,3));