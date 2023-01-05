function solution(s) {
  let answer;
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}

function solution2(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s.substring(mid - 1, mid + 1); // 첫번째 매개변수부터 두번째 매개변수 전까지
  } else {
    answer = s.substring(mid, mid + 1);
  }
  return answer;
}

console.log(solution2("good"));
