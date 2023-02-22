function solution(N, NUMBER_LIST) {
  let numberList = [...NUMBER_LIST];
  let key = 0;
  let i, j;
  for (i = 1; i < N; i += 1) {
    key = numberList[i];

    for (j = i - 1; j >= 0; j -= 1) {
      if (key > numberList[j]) {
        break;
      }
      numberList[j + 1] = numberList[j];
    }

    numberList[j + 1] = key;
  }

  return numberList;
}

const N = 6;
const NUMBER_LIST = [11, 7, 5, 6, 10, 9];
const ANSWER = solution(N, NUMBER_LIST);
console.log(ANSWER);
