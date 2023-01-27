function solution(str1, str2) {
  let cnt = 0;
  let arr = str2.split("").sort().join("");
  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    let chk = str1[i];
    for (let j = i + 1; j < i + str2.length; j++) {
      chk += str1[j];
    }
    if (arr == chk.split("").sort().join("")) cnt += 1;
  }
  return cnt;
}
console.log(solution("bacaAacba", "abc"), 3);
