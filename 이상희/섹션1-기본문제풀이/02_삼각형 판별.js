// 삼각형 조건 : 가장 긴 변 < 나머지 변들의 합

function solution(a, b, c) {
  let answer;
  let max;
  let sum = a + b + c;

  // 가장 긴 변 설정
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (max < c) {
    max = c;
  }

  // 삼각형 조건 판별
  if (sum - max > max) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}

console.log(solution(6, 7, 11));
