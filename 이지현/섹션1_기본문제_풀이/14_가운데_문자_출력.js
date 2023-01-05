function solution(str) {
  let answer;
  const half = str / 2;
  const len = str.length;

  if (len % 2 === 0) {
    // 짝수일때
    answer = str[(half - 1, half)];
  } else {
    // 홀수일때
    answer = Math.ceil(str / 2);
  }
  return answer;
}

console.log(solution("study"));
console.log(solution("good"));
