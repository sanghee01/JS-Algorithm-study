function solution(str1, str2) {
  let answer = "YES";
  let sH1 = new Map();
  let sH2 = new Map();

  for (let x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }
  for (let x of str2) {
    if (sH2.has(x)) sH2.set(x, sH2.get(x) + 1);
    else sH2.set(x, 1);
  }
  sH1 = [...sH1].sort();
  sH2 = [...sH2].sort();

  if (sH1.toString() !== sH2.toString()) {
    answer = "NO";
  }
  return answer;
}

// 강사 풀이
function solution2(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
