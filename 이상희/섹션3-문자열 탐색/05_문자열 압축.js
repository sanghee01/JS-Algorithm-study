function solution(s) {
  let answer = "";
  let char;
  let cnt = 1;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += char;
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
