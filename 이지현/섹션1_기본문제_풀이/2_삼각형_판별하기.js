function solution(a, b, c) {
  const max = Math.max(a, b, c);
  const total = a + b + c;
  const twoSideSum = total - max;

  return twoSideSum > max ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
