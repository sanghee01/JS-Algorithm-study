function solution(N, ARR1, M, ARR2) {
  let combinedArray = [...ARR1, ...ARR2];
  combinedArray.sort((a, b) => a - b);

  return combinedArray;
}

function solution2(N, ARR1, M, ARR2) {
  let result = [];
  let [p1, p2] = [0, 0];

  let [valueOfArr1, valueOfArr2] = [0, 0];
  while (true) {
    [valueOfArr1, valueOfArr2] = [ARR1[p1], ARR2[p2]];

    // 먼저 포인터가 끝에 도다른 배열이 있을 경우 break
    if (p1 >= N || p2 >= M) break;

    if (valueOfArr1 < valueOfArr2) {
      result.push(valueOfArr1);
      p1 += 1;
    } else {
      result.push(valueOfArr2);
      p2 += 1;
    }
  }

  // 아직 포인터가 끝까지 도달하지 못한 배열일 경우,
  // 끝까지 옮기며 값들을 순차적으로 넣어줌
  while (p1 < N) {
    result.push(ARR1[p1]);
    p1 += 1;
  }
  while (p2 < M) {
    result.push(ARR2[p2]);
    p2 += 1;
  }

  return result;
}

const N = 3;
const ARR1 = [1, 3, 5];
const M = 5;
const ARR2 = [2, 3, 6, 7, 9];

const ANSWER = solution2(N, ARR1, M, ARR2);
console.log(ANSWER);
