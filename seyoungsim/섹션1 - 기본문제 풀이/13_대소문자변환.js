/**
 * 대소문자 변환
 *  대문자는 소문자로 소문자는 대문자로 변환하여 출력
 */

// 정규식으로 푼 문제
function solution(str) {
  let answer = '';
  let uppercaseReg = /[A-Z]/g;
 
  for (let char of str) {
    if (char.match(uppercaseReg)) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  }
  
  return answer;
}
  
console.log(solution('StuDY'));
  

// 정답지 풀이
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}
  
console.log(solution('StuDY'));