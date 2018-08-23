var removeDuplicates = function(nums) {
  let len = nums.length;
  let resultLen = len;
  for (let i = 0; i < len - 1; i++) {
      if (nums[i] === null){
          continue;
      }
      for (let j = i + 1; j < len; j++) {
          if (nums[i] === nums[j]) {
              resultLen--;
              nums[j] = null;
          }
      }
  }
  for(let i = 1; i < len; i++) {
      if (nums[i] === null) {
          for(let j = i + 1; j < len; j++) {
              if (nums[j] === null) {
                continue;
              } 
              nums[i] = nums[j];
              nums[j] = null;
              break;
          }
      }
  }
  return resultLen;
};

let a = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(a);
