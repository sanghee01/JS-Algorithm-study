function solution(s) {
  let answer = "";
  for (let x of s) {
    if (!answer.includes(x)) {
      answer += x;
    }
  }
  return answer;
}

// indexOf(인자, n) : 첫번째 매개변수를 발견한 인덱스 리턴, 두번째 매개변수는 검색을 시작할 인덱스(생략시 첫번째)
function solution2(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
  return answer;
}

// 번외: 특정 문자열 개수 찾는 법
function solution3(s) {
  let answer = 0;
  let pos = s.indexOf("k");
  // 해당 인자 못 찾으면 -1 반환
  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1); // pos + 1 : 현재 찾은 인덱스 다음꺼 찾기
  }
  return answer;
}

console.log(solution2("ksekkset"));
