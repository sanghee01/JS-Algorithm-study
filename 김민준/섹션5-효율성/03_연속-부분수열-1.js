/**
 * SEQUENCE에서 p1부터 p2까지의 합을 구해 반환하는 함수
 *
 * @param {number} p1 포인터1
 * @param {number} p2 포인터2
 * @param {number[]} SEQUENCE 수열
 * @returns {number} 합
 */
function getSum(p1, p2, SEQUENCE) {
  let sum = 0;
  for (let i = p1; i <= p2; i += 1) {
    sum += SEQUENCE[i];
  }

  return sum;
}

function solution(N, M, SEQUENCE) {
  let cnt = 0;
  let sum = 0;
  let [p1, p2] = [0, 0];

  while (true) {
    if (p2 >= N) break;

    sum = getSum(p1, p2, SEQUENCE);

    if (sum === M) {
      cnt += 1;
      p1 += 1;
      p2 += 1;
    } else if (sum < M) {
      p2 += 1;
    } else if (sum > M) {
      p1 += 1;
    }
  }

  return cnt;
}

const [N, M] = [8, 6];
const SEQUENCE = [1, 2, 1, 3, 1, 1, 1, 2];

const ANSWER = solution(N, M, SEQUENCE);
console.log(ANSWER);
