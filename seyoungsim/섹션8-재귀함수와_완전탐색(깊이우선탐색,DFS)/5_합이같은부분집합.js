/**
 * 합이 같은 부분집합(DFS : 아마존 인터뷰)
 *
 * N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때
 * 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고,
 * 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
 * 둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며,
 * 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
 * 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이
 * 16으로 같은 경우가 존재하는 것을 알 수 있다.
 *
 * 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
 * 두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않으며, 그 크기는 1,000,000이하입니다.
 */

function solution(arr) {
  // 리턴할 값과, 재귀함수에서 벗어날 flag 변수를 만든다.
  let answer = "NO",
    flag = 0;

  // 두 부분집합의 합이 같은지 확인하기 위해, 각 원소들의 total 값을 계산.
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  function DFS(L, sum) {
    if (flag) return;
    // 재귀함수가 원소의 갯수만큼 돌았을 때, 각 원소의 합을 계산한다.
    if (L === n) {
      // 두 부분집합이 같은 값일 때 yes 를 반환하고 플래그를 1로 만든다.
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      // 부분집합 구하기처럼, 트리의 레벨을 1씩 높이되, 왼쪽 노드는 각 원소의 값을 더하고
      // 오른쪽 노드는 각 원소의 값을 더하지 않고, 트리의 레벨만 높인다.
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  // 트리의 레벨과, 원소의 합을 구할 인수 값을 넘긴다.
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
