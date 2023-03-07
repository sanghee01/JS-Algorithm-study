/**
 * 동전교환
 *
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가?
 * 각 단위의 동전은 무한정 쓸 수 있다.
 *
 * 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종류가 주어지고,
 * 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 각 동전의 종류는 100원을 넘지 않는다.
 *
 * 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
 */

function solution(m, arr) {
  const n = arr.length;
  let minimum = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    // 동전의 합이 거스름돈과 같거나 클 때, 트리 레벨이 최솟값보다 작으면 minimum으로 지정한다.
    if (sum >= m) {
      if (minimum > L) {
        minimum = L;
      }
      return;
    }

    // 동전의 종류만큼 재귀함수를 실행하여 노드 갯수를 생성한다.
    for (let i = 0; i < n; i++) {
      DFS(L + 1, sum + arr[i]);
    }
  }

  DFS(0, 0);

  return minimum;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
