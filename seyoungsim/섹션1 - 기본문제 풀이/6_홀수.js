/**
 * 7개 자연수에서 홀수 자연수의 합과 최솟값을 반환하라.
 */
function solution(arr) {
  let answer = [];
  const oddNumbers = arr.filter((n) => n % 2 === 1);

  const sum = oddNumbers.reduce((a, c) => a + c, 0);
  const min = Math.min(...oddNumbers);

  answer.push(sum);
  answer.push(min);

  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); // [ 256, 41 ]