function solution(s) {
  let answer = "YES";
  let string = s.toUpperCase();
  // filter 메서드는 배열에서만 호출 가능
  string = Array.from(string).filter(
    (x) => x.charCodeAt() >= 65 && x.charCodeAt() <= 90
  );
  let length = string.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (string[i] !== string[length - i - 1]) answer = "NO";
  }
  return answer;
}

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, ""); // 소문자 알파펫 아닌 것들 다 제거
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution2(str));
