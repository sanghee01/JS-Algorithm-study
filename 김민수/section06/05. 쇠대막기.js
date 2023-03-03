function solution(str) {
  let val = 0;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") arr.push(str[i]);
    else {
      arr.pop();
      str[i - 1] == "(" ? (val += arr.length) : (val += 1);
    }
  }
  return val;
}

console.log(solution("(((()(()()))(())()))(()())"));
