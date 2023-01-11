function solution(s) {
  let answer = "YES";
  let string = s.toUpperCase();
  let length = string.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (string[i] !== string[length - i - 1]) answer = "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));
