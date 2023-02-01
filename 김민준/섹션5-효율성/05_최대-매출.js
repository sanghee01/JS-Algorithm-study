/**
 * salesRecord 에서 p1부터 p2까지의 합을 구해 반환하는 함수
 *
 * @param {number} p1 포인터1
 * @param {number} p2 포인터2
 * @param {number[]} salesRecord 매출기록
 * @returns {number} 합
 */
function getSum(p1, p2, salesRecord) {
  let sum = 0;
  for (let i = p1; i <= p2; i += 1) {
    sum += salesRecord[i];
  }

  return sum;
}

function solution(N, K, salesRecord) {
  let max = 0;

  let sum = 0;
  let [p1, p2] = [0, K - 1];
  while (true) {
    if (p2 === N) break;

    sum = getSum(p1, p2, salesRecord);

    if (sum > max) {
      max = sum;
    }

    p1 += 1;
    p2 += 1;
  }

  return max;
}

const [N, K] = [10, 3];
const salesRecord = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

const ANSWER = solution(N, K, salesRecord);
console.log(ANSWER);
