function solution(str) {
  let answer = "YES";

  const reg = /[^a-z]/g;
  const replaceStr = str.toLowerCase().replace(reg, "");
  const reverseStr = [...replaceStr].reverse().join("");

  if (replaceStr !== reverseStr) {
    answer = "NO";
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str)); // 'YES'
