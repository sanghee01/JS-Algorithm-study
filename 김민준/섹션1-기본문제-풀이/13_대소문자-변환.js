/**
 * 문자 하나를 받아 대문자인지 판단하는 함수
 * 
 * @param {string} ch 
 * @returns {boolean}
 */
function isUpper(ch) {
  const regex = /[A-Z]/;
  return regex.test(ch);
}

/**
 * 문자 하나를 받아 소문자인지 판단하는 함수
 * @param {string} ch 
 * @returns {boolean}
 */
function isLower(ch) {
  const regex = /[a-z]/;
  return regex.test(ch);
}

function solution(str) {
  let answer = '';

  for(let i=0; i<str.length; i+=1) {
    let cur = str[i];

    if(isUpper(cur)) answer += cur.toLowerCase();
    else if(isLower(cur)) answer += cur.toUpperCase();
    else answer += cur;
  }

  return answer;
}

const str = 'StuDY';
const result = solution(str);
console.log(result);