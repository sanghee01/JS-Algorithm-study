function makeColumnToRow(board) {
  let newBoard = Array.from({length: board.length}, () => Array(board[0].length).fill(null));
 
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      newBoard[i][j] = board[j][i];
    }
  }
  return newBoard;
}

function solution(board, moves) {
  let arr = [];
  let result = 0;
  let myBoard = makeColumnToRow(board);

  /*
  console.log(myBoard)
  // myboard
  [
    [ 0, 0, 0, 4, 3 ],
    [ 0, 0, 2, 2, 5 ],
    [ 0, 1, 5, 4, 1 ],
    [ 0, 0, 0, 4, 3 ],
    [ 0, 3, 1, 2, 1 ]
  ]
  
  // moves
  [1,5,3,5,1,2,1,4];
  */
  console.log(myBoard)
  for (let i = 0; i < moves.length; i += 1) {
    let row = moves[i] - 1;
    for (let j = 0; j < myBoard[row].length; j += 1) {
      if (myBoard[row][j] === 0) {
        continue;
      }
      
      if (arr[arr.length - 1] === myBoard[row][j]) {
        arr.pop();
        result += 2;
        break;
      } 
      arr.push(myBoard[row][j])
      myBoard[row][j] = 0;
      break;
    }
  }
  return result
}

const board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
];
const moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));