function solution(a, b, c, d, e, f, g) {
  const arr = [a, b, c, d, e, f, g];
  const evenArr = arr.filter((element) => element % 2 === 1);

  const sum = evenArr.reduce((prev, curr) => prev + curr);
  const min = Math.min(...evenArr);

  return sum + `\n` + min;
}

console.log(solution(12, 77, 38, 41, 53, 92, 85));
