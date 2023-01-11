function getBackSlashMax() {}

function solution(num, arr) {
  let row = 0;
  let column = 0;
  const rowArr = [];
  const columnArr = [];

  // row [i][j]
  // column [j][j]
  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < num; j += 1) {
      row += arr[i][j];
      column += arr[j][i];

      rowArr.push(row);
      columnArr.push(column);

      row = 0;
      column = 0;
    }
  }

  row = Math.max(...rowArr);
  column = Math.max(...columnArr);

  let slash = 0;
  let backSlash = 0;

  // slash [i][i]
  // backSlash [i][n-1-i] -> [0, 5-1-0],[0,5-1-1]
  const slashSumArr = [];
  const backSlashArr = [];
  for (let i = 0; i < num; i += 1) {
    slash += arr[i][i];
    backSlash += arr[i][num - 1 - i];

    slashSumArr.push(slash);
    backSlashArr.push(backSlash);
  }

  slash = Math.max(...slashSumArr);
  backSlash = Math.max(...backSlashArr);

  return Math.max(row, column, slash, backSlash);
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(5, arr));
