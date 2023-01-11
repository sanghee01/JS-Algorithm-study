/**
 * 격자판 최대합
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.
 */

function solution(array) {
  let n = array.length;

  let mainDiagonal = 0;
  let skewDiagonal = 0;
  let row = 0;
  let column = 0;

  for (let i = 0; i < n; i++) {
    mainDiagonal += array[i][i];
    skewDiagonal += array[i][n - i - 1];
  }

  let rowList = [];
  let colList = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      row += array[i][j];
      column += array[j][i];
    }
    rowList.push(row);
    colList.push(column);
    row = 0;
    column = 0;
  }

  row = Math.max(...rowList);
  column = Math.max(...colList);

  return Math.max(mainDiagonal, skewDiagonal, row, column);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 155


// 정답지의 풀이
// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   let sum1 = (sum2 = 0);
//   for (let i = 0; i < n; i++) {
//     sum1 = sum2 = 0;
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);
//   }
//   sum1 = sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][n - i - 1];
//   }
//   answer = Math.max(answer, sum1, sum2);
//   return answer;
// }

// let arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];
// console.log(solution(arr));
