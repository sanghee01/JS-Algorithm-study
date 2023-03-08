/**
 * 팩토리얼
 *
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n*(n-1)*(n-2)*.....*2*1입니다.
 * 만약 N=5라면 5!=5*4*3*2*1=120입니다.
 *
 * 첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.
 */

function solution(n) {
  let sum = n;

  function DFS(m) {
    if (m === 0) return;
    sum = sum * m;
    DFS(m - 1);
  }

  DFS(n - 1);

  return sum;
}

console.log(solution(5));

// 정답지 풀이. 5 * 4 * 3 * 2 * 1 순으로 1씩 감소되는 숫자로 곱해진다.
// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if (n === 1) return 1;
//     else return n * DFS(n - 1);
//   }
//   answer = DFS(n);
//   return answer;
// }

// console.log(solution(5));
