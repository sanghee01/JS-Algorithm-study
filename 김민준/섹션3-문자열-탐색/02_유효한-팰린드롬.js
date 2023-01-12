/**
 * INPUT 값에서 알파벳만 뽑아내서 반환하는 함수
 * 
 * @param {string} INPUT 
 * @returns {string} 
 */
function getOnlyAlphabet(INPUT) {
  let result = '';
  const REGEX = /[a-z]/g;

  result = INPUT.match(REGEX).join('');
  return result;
}

/**
 * INPUT 값이 유효한 팰린드롬인지 boolean 값으로 반환하는 함수
 * 
 * @param {string} INPUT 
 * @returns {boolean}
 */
function isValidPalindrome(INPUT) {
  let result = false;

  result = INPUT === INPUT.split('').reverse().join('') ? true : false;
  return result;
}

function solution(INPUT) {
  let answer = '';

  INPUT = INPUT.toLowerCase();
  INPUT = getOnlyAlphabet(INPUT);
  answer = isValidPalindrome(INPUT) ? 'YES' : 'NO';

  return answer;
}

const INPUT = 'found7, time: study; Yduts; emit, 7Dnuof';
const result = solution(INPUT);
console.log(result);