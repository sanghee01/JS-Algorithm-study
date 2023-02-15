/**
 * 좌표 2개를 인자로 받아 정렬하는 함수
 * x좌표가 같다면, y좌표로 정렬하도록 한다.
 *
 * @param {number[]} coord1
 * @param {number[]} coord2
 * @returns {number} 음수라면 그대로, 양수라면 자리를 바꿔줌
 */
function coordSort(coord1, coord2) {
  let [x1, y1] = coord1;
  let [x2, y2] = coord2;

  if (x1 === x2) {
    return y1 - y2;
  } else {
    return x1 - x2;
  }
}

function solution(N, COORD_LIST) {
  let result = COORD_LIST.sort((a, b) => coordSort(a, b));

  return result;
}

const N = 5;
const COORD_LIST = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
const ANSWER = solution(N, COORD_LIST);
console.log(ANSWER);
