function solution(value) {
  let arr = [];
  let size = 0;
  let answer = '';
  for (let str of value) {
    if (str === '(') {
      arr.push(str);
    } else if (str === ')') {
      size = arr.length;
      if (arr[size - 1] === '(') {
        arr.pop();
      }
    } else {
      if (arr.length === 0) {
        answer += str
      }
    }
  }
  return answer;
}

const value = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(value));