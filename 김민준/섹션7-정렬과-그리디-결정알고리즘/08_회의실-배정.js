/**
 * 끝나는 시간으로 정렬하되, 끝나는 시간이 같다면 시작 시간 순으로 정렬하는 함수
 *
 * @param {number[]} time1
 * @param {number[]} time2
 * @returns {number}
 */
function timeSort(time1, time2) {
  let [start1, end1] = time1;
  let [start2, end2] = time2;

  if (end1 === end2) {
    return start1 - start2;
  } else {
    return end1 - end2;
  }
}

function solution(N, TIME_LIST) {
  let result = 0;
  const SORTED_TIME_LIST = [...TIME_LIST].sort((a, b) => timeSort(a, b));

  let lastEndTime = 0;
  for (let [start, end] of SORTED_TIME_LIST) {
    if (start >= lastEndTime) {
      result += 1;
      lastEndTime = end;
    }
  }

  return result;
}

const N = 3;
const TIME_LIST = [
  [3, 3],
  [1, 3],
  [2, 3],
];
const ANSWER = solution(N, TIME_LIST);
console.log(ANSWER);
