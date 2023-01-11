/**
 * 문자 하나를 받아 대문자인지 판단하는 함수
 * 
 * @param {string} ch 
 * @returns {boolean}
 */
function isUpper(ch) {
  let regex = /[A-Z]/;
  return regex.test(ch);
}

function solution(str) {
  let cnt = 0;

  for(let i=0; i<str.length; i+=1) {
    if(isUpper(str[i])) cnt += 1;
  }

  return cnt;
}

const str = 'KoreaTimeGood';
const result = solution(str);
console.log(result);