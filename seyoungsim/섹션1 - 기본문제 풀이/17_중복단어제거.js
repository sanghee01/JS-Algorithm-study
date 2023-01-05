/**
 * 중복단어제거
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력
 */

// set을 통해 중복문자 제거
function solution(strs) {
  return [...new Set(strs)];
}
  
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
  


// 정답지 풀이.
function solution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
  