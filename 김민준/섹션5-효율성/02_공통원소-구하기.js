function solution(N, ARR1, M, ARR2) {
  let result = [];
  let numberCountMap = new Map();

  ARR1.forEach((el) => {
    numberCountMap.set(el, numberCountMap.get(el) + 1 || 1);
  });
  ARR2.forEach((el) => {
    numberCountMap.set(el, numberCountMap.get(el) + 1 || 1);
  });

  for (const [NUMBER, COUNT] of numberCountMap) {
    if (COUNT === 2) result.push(NUMBER);
  }

  result.sort((a, b) => a - b);

  return result;
}

function solution2(N, ARR1, M, ARR2) {
  let result = [];
  let sortedArr1 = [...ARR1].sort((a, b) => a - b);
  let sortedArr2 = [...ARR2].sort((a, b) => a - b);
  let [p1, p2] = [0, 0];

  let [valueOfArr1, valueOfArr2] = [0, 0];
  while (true) {
    [valueOfArr1, valueOfArr2] = [sortedArr1[p1], sortedArr2[p2]];

    if (p1 >= N || p2 >= M) break;

    if (valueOfArr1 === valueOfArr2) {
      result.push(valueOfArr1);
      p1 += 1;
      p2 += 1;
    }

    if (valueOfArr1 < valueOfArr2) {
      p1 += 1;
    }
    if (valueOfArr1 > valueOfArr2) {
      p2 += 1;
    }
  }

  return result;
}

const N = 5;
const ARR1 = [1, 3, 9, 5, 2];
const M = 5;
const ARR2 = [3, 2, 5, 7, 8];

const ANSWER = solution2(N, ARR1, M, ARR2);
console.log(ANSWER);
