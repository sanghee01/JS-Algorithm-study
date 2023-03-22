/**
 * 돌다리 건너기
 *
 * 철수는 학교에 가는데 개울을 만났습니다.
 * 개울은 N개의 돌로 다리를 만들어 놓았습니다. 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서
 * 돌다리를 건널 수 있습니다. 철수가 개울을 건너는 방법은 몇 가지일까요?
 *
 * 개울의 돌이 7개 일 때, 한 칸을 더 걸어야 개울을 건널 수 있음이 키포인트.
 */

function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[n] + dy[n - 1];
}

console.log(solution(7));
