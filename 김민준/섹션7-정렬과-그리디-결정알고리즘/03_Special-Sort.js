function solution(N, NUMBER_LIST) {
  let result = [];
  let numberList = [...NUMBER_LIST];

  let negativeNumberList = numberList.filter((num) => num < 0);
  let positiveNumberList = numberList.filter((num) => num > 0);

  result = [...negativeNumberList, ...positiveNumberList];
  return result;
}

const N = 8;
const NUMBER_LIST = [1, 2, 3, -3, -2, 5, 6, -6];
const ANSWER = solution(N, NUMBER_LIST);
console.log(ANSWER);
