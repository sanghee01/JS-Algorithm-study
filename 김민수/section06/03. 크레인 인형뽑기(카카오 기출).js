function solution(board, moves) {
  let cnt = 0;
  let nArr = [];
  // moves 확인
  for (let i = 0; i < moves.length; i++) {
    let chkVal = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      // board중 뽑을 것 찾기
      if (board[j][chkVal] != 0) {
        // 지금 뽑은게 그 전에 뽑은거랑 같은지 확인
        if (nArr.length != 0 && nArr[nArr.length - 1] == board[j][chkVal]) {
          cnt += 2;
          nArr.pop();
        } else {
          nArr.push(board[j][chkVal]);
        }
        board[j][chkVal] = 0;
        break;
      }
    }
  }
  return cnt;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ], //board 배열
    [1, 5, 3, 5, 1, 2, 1, 4] //moves 배열
  )
);
