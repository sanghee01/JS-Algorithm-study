function solution(str) {
  let setArr = new Set(str);
  let [arr1, arr2] = [[], []];
  let splitArr = str.split("");
  for (let value of setArr.values()) {
    arr1.push(value);
    arr2.push(splitArr.filter((e) => e == value).length);
  }
  let findInd = arr2.findIndex((e) => e == Math.max(...arr2));
  return arr1[findInd];
}

console.log(solution("BACBACCACCBDEDE"), "C");
