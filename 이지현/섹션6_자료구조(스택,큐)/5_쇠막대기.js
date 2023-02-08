function solution(value) {
  let arr = [];
  let result = 0;
  for (let str of value) {
    if (str === ')' &&  arr[arr.length - 1] === '(') { // 현재 str이 )이고, 배열 index -1의 값이 '('이면 레이저
      arr.pop();
      result += arr.length;
    } else {
      arr.push(str);
    }
  }
  return result
}

const input1 = '()(((()())(())()))(())';
console.log(solution(input1)); // 17

const input2 = '(((()(()()))(())()))(()())';
console.log(solution(input2)); // 24
