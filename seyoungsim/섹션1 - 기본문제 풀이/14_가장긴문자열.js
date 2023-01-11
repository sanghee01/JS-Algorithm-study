/**
 * 가장 긴 문자열
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력
 */
function solution(strs) {
  let answer = '', max = Number.MIN_SAFE_INTEGER;

  strs.forEach((char) => {
    const charsLength = [...char].length;

    if (max < charsLength) {
      max = charsLength;
      answer = char;
    }
  });
  
  return answer;
}

const str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str)); // beautiful