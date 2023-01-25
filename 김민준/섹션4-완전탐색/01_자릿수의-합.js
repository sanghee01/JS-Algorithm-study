function solution(N, NUMBER_LIST) {
  let eachDigitSumObj = {};

  // 각 자릿수의 합을 value로 객체에 초기화
  NUMBER_LIST.forEach((num) => {
    eachDigitSumObj[num] = num
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur);
  });

  // 각 자릿수의 합중 최댓값 구하기
  let maxSum = 0;
  maxSum = Math.max(...Object.values(eachDigitSumObj));
  
  // 각 자릿수의 합이 최댓값과 같은 수 뽑아내기
  let maxSumList = [];
  maxSumList = Object.entries(eachDigitSumObj).filter(entry => entry[1] === maxSum);

  // 뽑아낸 값들 중에서 최댓값 구하기
  let num = 0;
  let result = 0;
  maxSumList.forEach((el) => {
    num = parseInt(el[0]);
    if(result < num) {
      result = num;
    }
  });

  return result;
}

const N = 7;
const NUMBER_LIST = [128, 460, 603, 40, 521, 137, 123];
const ANSWER = solution(N, NUMBER_LIST);
console.log(ANSWER);
