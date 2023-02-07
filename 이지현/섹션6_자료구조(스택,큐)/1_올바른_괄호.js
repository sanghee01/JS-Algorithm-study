function solution(value) {
  let arr = [];
  let answer = '';
  
  for (let str of value) {
    if (str === ')' && arr[arr.length - 1] === '(') {
      arr.pop()
    } else {
      arr.push(str);
    }
  }

  return arr.length === 0 ? 'YES' : 'NO';
}

const value = '(()(()))(()';
console.log(solution(value));