function solution(text) {
  const answer = text.split("").filter((e) => e.toUpperCase() === e);
  return answer.length;
}

// 정규식으로
function solution2(text) {
  const reg = /[A-Z]/g;
  return text.match(reg).length;
}

console.log(solution("KoreanTimeGood"));
console.log(solution2("KoreanTimeGood"));
