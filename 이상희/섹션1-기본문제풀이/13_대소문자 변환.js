function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));
