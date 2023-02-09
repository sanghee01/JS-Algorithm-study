function solution(N, NUMBER_LIST) {
  let numberList = [...NUMBER_LIST];

  // for (let i = 0; i < N; i += 1) {
  //   for (let j = 0; j < N - i - 1; j += 1) {
  //     if (numberList[j] > numberList[j + 1]) {
  //       [numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]];
  //     }
  //   }
  // }

  // 위와 같은 로직
  for (let i = N - 1; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (numberList[j] > numberList[j + 1]) {
        [numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]];
      }
    }
  }

  return numberList;
}

const N = 6;
const NUMBER_LIST = [13, 5, 11, 7, 23, 15];
const ANSWER = solution(N, NUMBER_LIST);
console.log(ANSWER);
