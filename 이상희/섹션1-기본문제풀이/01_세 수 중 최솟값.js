function solution(a, b, c) {
  let answer;
  if (a < b && a < c) {
    answer = a;
  } else if (b < a && b < c) {
    answer = b;
  } else if (c < a && c < b) {
    answer = c;
  } else {
    // 세 수가 다 같은 경우
    answer = a;
  }
  return answer;
}

function solution2(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
}

console.log(solution(2, 2, 2));
