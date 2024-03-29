/**
 * 계단오르기
 *
 * 철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다.
 * 만약 총 4계단을 오른다면 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 로 5가지이다.
 * 그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇 가지인가?
 */

function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => -1);

  // 철수는 1~2계단씩 오를 수 있기에, 첫 계단을 올라가는 방법은 1가지이며,
  // 두 번째 계단을 오르는건 1+1 혹은 2 계단을 올라가는 방법은 2가지가 있다.
  dy[1] = 1;
  dy[2] = 2;

  // 3계단~n계단까지 오르기 위해, dy 배열을 통해 저장한 이전의 두개의 값인 1번째 계단을 오르는 방법과 2번째 계단을 오르는 방법을 더하면 된다.
  // 왜냐면 3번째 계단을 가는 방법은, 1번째 계단에서 출발하거나, 2번째 계단에서 출발하기 때문이다.
  // 점화식을 통해 규칙을 찾아내는 것이 중요하다.
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  // 7번째 계단의 수가 저장된 값을 반환한다.
  return dy[n];
}

console.log(solution(8));
