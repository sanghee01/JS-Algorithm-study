/**
 * 괄호문자제거
 *
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
 * 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 */

function solution(str) {
  const stack = [];

  for (let s of str) {
    if (s === "(") stack.push(s);
    else if (s === ")") {
      // for문 내에서 return 을 사용할 경우, 상위 함수의 결과 값을 반환하며 즉시 함수가 종료된다. (더 for문을 돌지 않음.)
      if (stack.length === 0) return "NO";

      let hasReachedLeftBracket = true;

      while (hasReachedLeftBracket) {
        const char = stack.pop();
        if (char === "(") hasReachedLeftBracket = false;
      }
    } else {
      stack.push(s);
    }
  }

  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

// 정답지 풀이

// function solution(s){
//     let answer;
//     let stack=[];
//     for(let x of s){
//         if(x===')'){
//             while(stack.pop()!=='(');
//         }
//         else stack.push(x);
//     }
//     answer=stack.join('');
//     return answer;
// }

// let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));
