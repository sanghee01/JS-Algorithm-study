function solution(s) {
  let answer = s;
  while (answer.includes("A")) {
    answer = answer.replace("A", "#");
  }
  return answer;
}

// 정규식 이용
function solution2(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

function solution3(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "BANANA";
console.log(solution2(str));
