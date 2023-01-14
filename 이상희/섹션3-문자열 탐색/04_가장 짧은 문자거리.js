function solution(s, t) {
  let answer = "";
  let tArr = [];
  let tIdx = s.indexOf(t);
  let distance;
  let nowDistance;
  s = s.split("");

  while (tIdx != -1) {
    tArr.push(tIdx);
    tIdx = s.indexOf(t, tIdx + 1);
  }

  for (let i = 0; i < s.length; i++) {
    distance = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < tArr.length; j++) {
      nowDistance = Math.abs(s.indexOf(s[i], i) - tArr[j]);
      if (nowDistance < distance) distance = nowDistance;
    }
    answer += distance;
  }
  return answer;
}

function solution2(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
