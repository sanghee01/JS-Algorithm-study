/**
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 
 * 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 */
// 처음 푼 풀이
function solution(str, t) {
  let answer = 0;
  
  for (let s of str) {
    if (s === t) answer += 1;
  }
  
  return answer;
}
  
let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
  
// 정답지의 다른 풀이
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}
  
let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));