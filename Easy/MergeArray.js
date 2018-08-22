var merge = function(nums1, m, nums2, n) {  
  let newLen = m;
  let k ,j;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < newLen; j++) {
        if (nums2[i] >= nums1[j] && nums2[i] < nums1[j+1]) {

            for (k = newLen; k > j; k--) {
                nums1[k] = nums1[k - 1];
            }
            nums1[j + 1] = nums2[i];
            newLen++;
            break;
        } else if (nums2[i] < nums1[j]) {
            for (k = newLen; k > j; k--) {
              nums1[k] = nums1[k - 1];
            }
            nums1[j] = nums2[i];
            newLen++;
            break;
        }
    }
    if (j === newLen) {
      nums1[j] = nums2[i];
      newLen++;
    }
  }

  //真实答案没有return
  return nums1;
};

let a = [2,0];
let b = [1];
console.log(merge(a,1,b,1));