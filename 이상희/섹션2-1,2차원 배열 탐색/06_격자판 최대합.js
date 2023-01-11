function solution(arr) {
  let answer;
  let N = arr.length;
  let rowSum = 0;
  let columnSum = 0;
  let diagonalSum = 0;
  let diagonalSum2 = 0;

  for (let i = 0; i < N; i++) {
    rowSum = 0;
    columnSum = 0;
    for (let j = 0; j < N; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }
  }
  for (let i = 0; i < N; i++) {
    diagonalSum += arr[i][i];
    diagonalSum2 += arr[i][N - 1 - i];
  }

  answer = Math.max(rowSum, columnSum, diagonalSum, diagonalSum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
