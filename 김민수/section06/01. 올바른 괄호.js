function solution(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] == "(" ? (cnt += 1) : (cnt -= 1);
  }
  return cnt == 0 ? "YES" : "NO";
}
console.log(solution("(())()"));
