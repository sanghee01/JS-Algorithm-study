/**
 * A가 낸 것과 B가 낸 것을 인자로 받아,
 * 가위바위보 결과를 반환하는 함수
 *
 * @param {string} INFO_A A의 정보
 * @param {string} INFO_B B의 정보
 * @returns {string}
 */
function getGameResult(INFO_A, INFO_B) {
  const RESULT = {
    WIN_A: 'A',
    WIN_B: 'B',
    DRAW: 'D',
  };

  // 만약 A가 1이고 B가 2라면 각각 가위, 바위 이므로 B가 이기게 된다.
  // 마찬가지로 A가 2, B가 3이라면 각각 바위, 보 이므로 B가 이긴다.
  // 결국 A에 1을 더한 값을 B가 가지고 있다면 B가 이기게 된다.

  // 하지만 A가 3일때 1을 더하면 4가 되는데, 4는 게임 정보에 없는 수 이므로,
  // 게임은 가위, 바위, 보 총 3종류이기 때문에 3으로 나머지 연산을 해주어서 1을 얻어준다.
  // 따라서 A가 3일때 B는 1이되는데 각각 보, 가위 이므로 B가 이기게 된다.

  // 여기서 만약 A가 2라면 1을 더하면 3이된다.
  // 그런데 3을 3으로 나머지 연산을 하면 0이 되는데, 0은 게임 정보에 없는 수이다.
  // 따라서 0일 경우는 원래 3의 값을 가져야 하므로 0은 falsy한 값이기 때문에,
  // 3과의 or 연산을 통해 3을 얻어서 정상적인 판단을 하도록 해준다.
  if (((INFO_A + 1) % 3 || 3) === INFO_B) return RESULT.WIN_B;
  else if (INFO_A === INFO_B) return RESULT.DRAW;
  else return RESULT.WIN_A;
}

function solution(N, INFO_LIST_A, INFO_LIST_B) {
  let [INFO_A, INFO_B] = ['', ''];
  let answer = '';

  for (let i = 0; i < N; i += 1) {
    [INFO_A, INFO_B] = [INFO_LIST_A[i], INFO_LIST_B[i]];
    answer = getGameResult(INFO_A, INFO_B);
    console.log(answer);
  }
}

const N = 5;
const INFO_LIST_A = [2, 3, 3, 1, 3];
const INFO_LIST_B = [1, 1, 2, 2, 3];
solution(N, INFO_LIST_A, INFO_LIST_B);
