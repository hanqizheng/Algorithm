var lengthOfLastWord = function(s) {
  let res = s.split(' ');
  let result = [];
  
  if (s.length === 0) {
      return 0;
  }
  for (let i = 0; i < res.length; i++) {
      if (res[i] !== '') {
         result.push(res[i]);
      }  
  }
  
  let len = result[result.length - 1];
  return len.length;
};

let a = 'a ';
console.log(a.length);
console.log(lengthOfLastWord(a));