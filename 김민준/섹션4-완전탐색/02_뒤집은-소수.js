/**
 * 자연수를 뒤집어 반환하는 함수
 * 
 * @param {number} num 
 * @returns {number}
 */
function getReversedNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

/**
 * 소수인지 판별해서 boolean 값을 반환하는 함수
 * 
 * @param {number} reversedNumber 뒤집어진 자연수
 * @returns {boolean} 소수라면 true, 아니라면 false 반환
 */
function isPrimeNumber(reversedNumber) {
  if (reversedNumber < 2) return false;

  for (let i = 2; i < reversedNumber; i += 1) {
    if (reversedNumber % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(N, NUMBER_LIST) {
  let reversedNumberList = [];

  reversedNumberList = NUMBER_LIST.map((num) => {
    return getReversedNumber(num);
  });

  let result = [];
  result = reversedNumberList
    .filter((el) => isPrimeNumber(el) === true)
    .join(' ');

  return result;
}

const N = 9;
const NUMBER_LIST = [32, 55, 62, 20, 250, 370, 200, 30, 100];
const ANSWER = solution(N, NUMBER_LIST);
console.log(ANSWER);
