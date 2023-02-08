function solution(s) {
  let answer = "";
  const stack = [];
  for (let x of s) {
    if (x === "(" || (stack.includes("(") && x !== ")")) stack.push(x);
    else if (!stack.includes("(") && x !== ")") answer += x;
    else if (x === ")") {
      if (stack.length === 0) return "잘못된 입력"; // 소괄호도 모든 문자에 속하는거라면 굳이 처리 안해도 될 듯
      let i = 1;
      while (1) {
        if (stack[stack.length - i] === "(") {
          stack.pop();
          break;
        } else {
          stack.pop();
        }
      }
    }
  }
  if (stack.length > 0) return "잘못된 입력";

  return answer;
}

// 강사 풀이
function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "("); // '(' 만날때까지 pop
    } else stack.push(x); // ')'가 아니면 push
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution2(str));
