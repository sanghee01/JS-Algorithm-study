function solution(s) {
  let answer;
  let sH = new Map(); // Map 빈 객체 생성

  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1); // 해당 문자 key가 존재하면 카운팅
    else sH.set(x, 1); // 없으면 key를 만들고 값을 1로 세팅
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
