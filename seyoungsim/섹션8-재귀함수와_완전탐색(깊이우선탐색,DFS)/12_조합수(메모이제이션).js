/**
 * 조합의 경우수(메모이제이션)
 *
 * nCr = n!/ (n-r)!r! 로 계산합니다. 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여
 * 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
 * nCr = n-1Cr-1 + n-1Cr
 *
 * 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
 *
 * ex) 5C3 = 4C2 + 4C3.
 * r 이 0이 될 때, 1C1 일 경우, 1을 반환한다.
 */

function solution(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    // 메모이제이션을 통해, 이전 노드를 통해 얻은 값을 리턴한다.
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else {
      // 메모이제이션을 만들기 위해, 특정 인덱스에 값을 넣는다.
      dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return dy[n][r];
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
