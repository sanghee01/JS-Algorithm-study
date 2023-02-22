/**
 * 크레인 인형뽑기(카카오 기출)
 *
 * 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해
 * 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진
 * 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
 * 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.
 *
 * board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
 * 0은 빈 칸을 나타냅니다.
 * 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
 * moves 배열의 크기는 1 이상 1,000 이하입니다.
 * moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
 */

function solution(board, moves) {
  const basket = [];
  let count = 0;

  function getDoll(i) {
    for (let j = 0; j < board.length; j++) {
      const doll = board[j][i];
      if (doll) {
        board[j][i] = 0;
        return doll;
      }
    }
    return 0;
  }

  moves.map((i) => {
    const doll = getDoll(i - 1);

    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        count += 2;
      } else {
        basket.push(doll);
      }
    }
  });

  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));

// 정답지 풀이

// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   moves.forEach((pos) => {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][pos - 1] !== 0) {
//         let tmp = board[i][pos - 1];
//         board[i][pos - 1] = 0;
//         if (tmp === stack[stack.length - 1]) {
//           stack.pop();
//           answer += 2;
//         } else stack.push(tmp);
//         break;
//       }
//     }
//   });

//   return answer;
// }
