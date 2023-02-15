function solution(N, M, NUMBER_LIST) {
  const SORTED_NUMBER_LIST = [...NUMBER_LIST].sort((a, b) => a - b);

  let [left, right] = [0, N - 1];
  let mid = 0;
  let cur = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    cur = SORTED_NUMBER_LIST[mid];

    if (cur < M) {
      left = mid + 1;
    } else if (cur > M) {
      right = mid - 1;
    } else {
      return mid + 1;
    }
  }
}

const [N, M] = [8, 32];
const NUMBER_LIST = [23, 87, 65, 12, 57, 32, 99, 81];
const ANSWER = solution(N, M, NUMBER_LIST);
console.log(ANSWER);
