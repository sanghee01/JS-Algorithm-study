/**
 * 격자판에서 각 행의 합 중 최댓값을 반환하는 함수
 * 
 * @param {number} N 각 행에 존재하는 숫자의 개수
 * @param {number[][]} board 격자판
 * @returns {number} 각 행의 합 중에서 최댓값
 */
function getMaxSumRow(N, board) {
  let result = 0;
  let sumList = [];

  let sum = 0;
  for(let i=0; i<N; i+=1) {
    sum = 0;
    for(let j=0; j<N; j+=1) {
      sum += board[i][j];
    }
    sumList.push(sum);
  }

  result = Math.max(...sumList);

  return result;
}

/**
 * 격자판에서 각 열의 합 중 최댓값을 반환하는 함수
 * 
 * @param {number} N 각 행에 존재하는 숫자의 개수
 * @param {number[][]} board 격자판
 * @returns {number} 각 열의 합 중에서 최댓값
 */
function getMaxSumCol(N, board) {
  let result = 0;
  let sumList = [];

  let sum = 0;
  for(let j=0; j<N; j+=1) {
    sum = 0;
    for(let i=0; i<N; i+=1) {
      sum += board[i][j];
    }
    sumList.push(sum);
  }

  result = Math.max(...sumList);

  return result;
}

/**
 * 격자판에서 각 대각선의 합 중 최댓값을 반환하는 함수
 * 
 * @param {number} N 각 행에 존재하는 숫자의 개수
 * @param {number[][]} board 격자판
 * @returns {number} 각 대각선의 합 중에서 최댓값
 */
function getMaxSumDiagonal(N, board) {
  let result = 0;

  let leftStartDiagonalSum = 0; // 왼쪽 위에서 시작하는 대각선
  let rightStartDiagonalSum = 0; // 오른쪽 위에서 시작하는 대각선
  for(let i=0; i<N; i+=1) {
    for(let j=0; j<N; j+=1) {
      if(i === j) leftStartDiagonalSum += board[i][j];
      if(i + j === N - 1) rightStartDiagonalSum += board[i][j];
    }
  }

  result = Math.max(leftStartDiagonalSum, rightStartDiagonalSum);

  return result;
}

function solution(N, board) {
  let answer = 0;

  const MAX_SUM_ROW = getMaxSumRow(N, board);
  const MAX_SUM_COL = getMaxSumCol(N, board);
  const MAX_SUM_DIAGONAL = getMaxSumDiagonal(N, board);

  answer = Math.max(MAX_SUM_ROW, MAX_SUM_COL, MAX_SUM_DIAGONAL);

  return answer;
}

const N = 5;
const board = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
const result = solution(N, board);
console.log(result);
