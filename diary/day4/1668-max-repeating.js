var maxRepeating = function (sequence, word) {
  const step = word.length;
  const dp = new Array(sequence.length).fill(0);
  let ans = 0;

  function testMatch(start, end) {
    // end 是不包含的
    for (let i = 0; i < step; i++) {
      if (sequence[start + i] !== word[i]) return false;
    }
    return true;
  }

  for (let i = step - 1; i < sequence.length; i++) {
    if (testMatch(i - step + 1, i - step + 1 + step)) {
      dp[i] = (i >= step ? dp[i - step] : 0) + 1;
      if (dp[i] > ans) ans = dp[i];
    } else {
      dp[i] = 0;
    }
  }

  return ans;
};
