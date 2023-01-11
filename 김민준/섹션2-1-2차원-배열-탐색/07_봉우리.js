/**
 * board의 가장자리를 0으로 초기화해서 반환하는 함수
 * 
 * @param {number} N 각 행에 있는 자연수의 개수
 * @param {number[][]} board 격자판
 * @returns {number[][]} 테두리에 0이 추가된 board
 */
function addZeroPadding(N, board) {
  // N + 2의 길이를 가진 배열을 전부 0으로 초기화
  let result = Array.from({ length: N + 2 }, () => new Array(N + 2).fill(0));

  for(let i=1; i<=N; i+=1) {
    for(let j=1; j<=N; j+=1) {
      result[i][j] = board[i-1][j-1];
    }
  }

  return result;
}

/**
 * 봉우리의 개수를 반환하는 함수
 * 
 * @param {number} N 각 행에 있는 자연수의 개수
 * @param {number[][]} board 격자판
 * @returns {number} 봉우리의 개수
 */
function getPeakCount(N, board) {
  let result = 0;
  const DIR_OBJ = {
    TOP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };

  for(let i=1; i<N-1; i+=1) {
    for(let j=1; j<N-1; j+=1) {
      let cur = board[i][j]; // cur을 중심으로 상,하,좌,우 체크
      let checkList = [cur]; // cur을 포함한 체크할 값들

      for(const DIR of Object.values(DIR_OBJ)) {
        let [row, col] = [i + DIR[0], j + DIR[1]];
        checkList.push(board[row][col]);
      }

      // cur을 포함한 체크리스트의 값들 중 최댓값이 cur이라면 cur은 봉우리이다.
      if(Math.max(...checkList) === cur) result += 1;
    }
  }

  return result;
}

function solution(N, board) {
  let answer = 0;

  board = addZeroPadding(N, board);
  N += 2; // 테두리에 0을 둘러줬기 때문에 +2

  answer = getPeakCount(N, board);

  return answer;
}

const N = 5;
const board = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
const result = solution(N, board);
console.log(result);