/**
 * 올바른 괄호
 *
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
 * 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
 */

function solution(str) {
  // 왼쪽 괄호와 오른쪽 괄호가 짝이 맞을 때마다 pop을 통해 stack 안에서 값을 꺼낸다.
  // 짝이 안맞을 경우, push 함수를 통해 stack 안에 데이터를 추가한다.
  let result = "YES";
  const stack = [];

  for (let index = 0; index < [...str].length; index++) {
    if (stack.length === 0) {
      stack.push(str[index]);
      continue;
    }

    if (stack[stack.length - 1] + str[index] === "()") {
      stack.pop();
      continue;
    }

    stack.push(str[index]);
  }

  if (stack.length) {
    result = "NO";
  }

  return result;
}

let a = "(()(()))(()"; // NO
// let a = "(()(()))"; // YES
console.log(solution(a));

// 정답지 풀이

// function solution(s){
//     let answer="YES";
//     stack=[];
//     for(let x of s){
//         if(x==='(') stack.push(x);
//         else{
//             if(stack.length===0) return "NO";
//             stack.pop();
//         }
//     }
//     if(stack.length>0) return "NO";
//     return answer;
// }

// let a="(()(()))(()";
// console.log(solution(a));
