function solution(value) {
  const set = new Set(value);
  return [...set].join("");
}

console.log(solution("ksekkset"));
