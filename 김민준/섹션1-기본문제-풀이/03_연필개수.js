function solution(N) {
  return Math.ceil(N / 12);
}

function solution2(N) {
  let answer = 0;

  answer += parseInt(N / 12);
  if(N % 12 > 0) answer += 1;

  return answer;
}

const N = 25;
const result = solution2(N);
console.log(result);