function solution(a, b, c) {
  let answer = 0;

  if(a < b) answer = a;
  else answer = b;
  if(c < answer) answer = c;

  return answer;
}

function solution2(a, b, c) {
  return Math.min(a, b, c);
}

const [a, b, c] = [2, 5, 1];
const result = solution(a, b, c);
console.log(result);