let answer = 0;

function isAnagram(arr, t) {
  let sHCopy = new Map(arr); // 원본 수정하면 안되므로 복사본 만듦
  for (let j = 0; j < t.length; j++) {
    if (!sHCopy.has(t[j]) || sHCopy.get(t[j]) == 0) break;
    sHCopy.set(t[j], sHCopy.get(t[j]) - 1);
    if (j === t.length - 1) {
      answer++;
    }
  }
}

function solution(s, t) {
  let sH = new Map();
  for (let i = 0; i < t.length; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  isAnagram(sH, t);

  for (let i = t.length; i < s.length; i++) {
    sH.set(s[i - t.length], sH.get(s[i - t.length]) - 1);
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
    isAnagram(sH, t);
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

// 강사 풀이
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution2(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  // 빼고 추가 비교
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
