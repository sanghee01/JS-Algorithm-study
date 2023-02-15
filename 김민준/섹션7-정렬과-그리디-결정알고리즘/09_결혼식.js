function solution(N, TIME_LIST) {
  let timeTable = Array.from({ length: 72 }, () => 0);

  for (let [start, end] of TIME_LIST) {
    for (let i = start; i < end; i += 1) {
      timeTable[i] += 1;
    }
  }

  return Math.max(...timeTable);
}

const N = 5;
const TIME_LIST = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
const ANSWER = solution(N, TIME_LIST);
console.log(ANSWER);
