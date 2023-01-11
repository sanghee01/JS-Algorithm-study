/**
 * 가위 바위 보
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다. 비길 경우에는 D를 출력합니다.
 */

function solution(a, b) {
  let answer = '';

  Array.apply(null, Array(5)).map((_, i) => {
    if (b[i] - a[i] === 1 || b[i] - a[i] === -2) {
      answer += 'B';
    } else if (b[i] - a[i] === -1 || b[i] - a[i] === 2) {
      answer += 'A';
    } else if (b[i] === a[i]) {
      answer += 'D';
    } else {
      answer += 'D';
    }
  });
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // ABABD