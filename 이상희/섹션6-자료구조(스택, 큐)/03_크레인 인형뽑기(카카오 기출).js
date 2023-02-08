function solution(board, moves) {
  let answer = 0;
  const stack = [];
  let position;
  for (let i = 0; i < moves.length; i++) {
    position = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (!board[j][position]) continue;
      else {
        if (board[j][position] === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[j][position]);
        }
        board[j][position] = 0;
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
