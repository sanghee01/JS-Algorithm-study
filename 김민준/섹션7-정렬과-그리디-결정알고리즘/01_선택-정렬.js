function solution(N, NUMBER_LIST) {
  let numberList = [...NUMBER_LIST];
  let minIndex = 0;
  for (let i = 0; i < N; i += 1) {
    minIndex = i;
    for (let j = i + 1; j < N; j += 1) {
      if (numberList[j] < numberList[minIndex]) {
        minIndex = j;
      }
    }
    if (numberList[minIndex] === numberList[i]) {
      continue;
    } else {
      [numberList[i], numberList[minIndex]] = [
        numberList[minIndex],
        numberList[i],
      ];
    }
  }

  return numberList;
}

const N = 6;
const NUMBER_LIST = [13, 5, 11, 7, 23, 15];

const ANSWER = solution(N, NUMBER_LIST);
console.log(ANSWER);
