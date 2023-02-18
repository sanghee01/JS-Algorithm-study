/**
 * 이진트리 순회(깊이우선탐색)
 *
 * 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
 *
 *            (1)
 *     (2)           (3)
 * (4)     (5)    (6)    (7)
 */

function solution(n) {
  let answer = "";

  // 전위순회 출력 : 1 2 4 5 3 6 7
  //   function dfs(m) {
  //     if (m > 7) return;
  //     answer += m + "";

  //     dfs(m * 2);
  //     dfs(m * 2 + 1);
  //   }

  // 중위순회 출력 : 4 2 5 1 6 3 7
  //   function dfs(m) {
  //     if (m > 7) return;

  //     dfs(m * 2);
  //     answer += m + " ";
  //     dfs(m * 2 + 1);
  //   }

  // 후위순회 출력 : 4 5 2 6 7 3 1
  function dfs(m) {
    if (m > 7) return;

    dfs(m * 2);
    dfs(m * 2 + 1);
    answer += m + " ";
  }

  dfs(n);

  return answer;
}

console.log(solution(1));
