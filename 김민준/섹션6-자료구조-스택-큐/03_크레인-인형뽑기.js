// 오른쪽으로 90도 회전
// 행을 열로, 열을 행으로
function rotate(board) {
  let result = [];
  let len = board.length;

  for (let i = 0; i < len; i++) {
    let tmp = [];
    for (let j = 0; j < len; j++) {
      tmp.push(board[j][i]);
    }

    /* 
      0을 제외하고 reverse 시켜준다.
      예를 들어 0,0,3,3,2 일경우,
      그대로 reverse 하면 2,3,3,0,0이 되는데,
      pop을 했을때 0은 빈칸이므로 잘못된 접근이다.
      따라서 0을 제외하고 reverse 해주면 2,3,3 이 되어서,
      마지막 요소인 3을 뽑아낼 수 있다. 
      */
    tmp = tmp.reverse().filter((item) => item !== 0);
    result.push(tmp);
  }

  return result;
}

function solution(board, moves) {
  let answer = 0;
  let rotateBoard = [];
  let stack = [];

  rotateBoard = rotate(board);

  for (let i = 0; i < moves.length; i++) {
    let row = moves[i] - 1;

    // 비었는데 뽑으려 할경우 continue
    if (rotateBoard[row].length === 0) continue;

    if (stack.length === 0) {
      stack.push(rotateBoard[row].pop());
    } else {
      let lastIndex = rotateBoard[row].length - 1;
      // 뽑으려는 것과 스택의 top이 일치할경우
      // 굳이 추가하지 말고 둘다 pop을 바로 해준다.
      if (stack[stack.length - 1] === rotateBoard[row][lastIndex]) {
        rotateBoard[row].pop();
        stack.pop();
        answer += 2;
      } else {
        stack.push(rotateBoard[row].pop());
      }
    }
  }

  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
const ANSWER = solution(board, moves);
console.log(ANSWER);
