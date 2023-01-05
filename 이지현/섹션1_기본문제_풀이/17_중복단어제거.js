function solution(num, arr) {
  const set = new Set(arr);
  return [...set];
}

console.log(solution(5, ["good", "time", "good", "time", "student"]));
