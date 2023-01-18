function solution(str) {
  let answer = parseInt(str.replace(/[^0-9]/g, ""));

  return answer;
}

function solution2(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution2(str));
