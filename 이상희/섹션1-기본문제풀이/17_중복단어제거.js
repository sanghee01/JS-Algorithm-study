function solution(s) {
  let answer = [];
  for (let x of s) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }
  return answer;
}

function solution2(s) {
  let answer;

  // filter : 참인 요소만 뽑아서 새로운 배열을 만듦
  answer = s.filter(function (v, i) {
    //v: 호출된 value i: 인덱스
    return s.indexOf(v) === i;
  });
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution2(str));
