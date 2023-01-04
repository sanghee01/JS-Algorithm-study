function solution(n) {
  let answer;
  if (n % 12 == 0) {
    answer = parseInt(n / 12);
  } else {
    answer = parseInt(n / 12) + 1;
  }
  return answer;
}

// Math.ceil : 올림 함수
function solution2(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
