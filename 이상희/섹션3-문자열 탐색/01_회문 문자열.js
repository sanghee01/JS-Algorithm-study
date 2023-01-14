function solution(s) {
  let answer = "YES";
  let string = s.toUpperCase();
  let length = string.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (string[i] !== string[length - i - 1]) answer = "NO";
  }
  return answer;
}

function solution2(s) {
  let answer = "YES";
  let string = s.toUpperCase();

  if (string.split("").reverse().join("") !== string) answer = "NO";
  // reverse는 배열의 메서드여서 배열에서만 사용 가능함
  return answer;
}

let str = "goooG";
console.log(solution2(str));
