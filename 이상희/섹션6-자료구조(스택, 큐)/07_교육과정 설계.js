function solution(need, plan) {
  let answer = "YES";
  const queue = [...need];
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x === queue[0]) queue.shift();
      else return "NO";
    }
  }
  if (queue.length) return "NO";

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
