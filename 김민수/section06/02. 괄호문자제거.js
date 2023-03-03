function solution(str) {
  let nStr = str;
  let cnt = 0;
  let startIndex;
  for (let i = 0; i < str.length; i++) {
    // '(' 의 카운터
    if (str[i] == "(") {
      if (cnt == 0) startIndex = i;
      cnt += 1;
    }
    // ')' 가 닫혔을 경우
    if (str[i] == ")" && cnt == 1) {
      nStr = nStr.replace(str.substring(startIndex, i + 1), "");
    }
    // ')' 카운터
    if (str[i] == ")") cnt -= 1;
  }
  return nStr;
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
