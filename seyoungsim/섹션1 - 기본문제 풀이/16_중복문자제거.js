/**
 * 중복문자제거
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력. 
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지
 */

// set을 통해 중복문자 제거
function solution(str) {
  let set = new Set(str);
  return [...set].join('');
}

console.log(solution('ksekkset')); // kset

//정답지 풀이. indexOf가 매칭된 첫 번째 인덱스를 반환하는 것을 이용하여, set 과 같이 사용.
function solution(s) {
  let answer = '';
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

console.log(solution('ksekkset')); // kset