/**
 * 재귀함수
 *
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
 */

function solution(n) {
  function recursive(m) {
    console.log(++m);
    if (m === n) return;

    recursive(m);
  }
  recursive(0);
}

solution(3);

// 정답지 풀이. 재귀함수가 호출 스택을 통해 쌓인 후, 쌓인 스택프레임인 재귀함수가 위에 쌓인 순서대로 1, 2, 3 등으로 로그가 찍힌다.
// function solution(n) {
//   function DFS(L) {
//     if (L == 0) return;
//     else {
//       DFS(L - 1);
//       console.log(L);
//     }
//   }
//   DFS(n);
// }

// solution(3);
