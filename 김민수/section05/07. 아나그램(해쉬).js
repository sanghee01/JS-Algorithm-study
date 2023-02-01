function solution(str1, str2) {
  let setArr = new Set(str1);
  let [arr1, arr2] = [str1.split(""), str2.split("")];
  for (let value of setArr.values()) {
    if (
      arr1.filter((e) => e == value).length !=
      arr2.filter((e) => e == value).length
    )
      return "NO";
  }
  return "YES";
}

// console.log(solution("AbaAeCe", "baeeACA"), "YES");
console.log(solution("abaCC", "Caaab"), "NO");
