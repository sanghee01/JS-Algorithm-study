function solution(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum;
  let numSumMax = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (sum === numSumMax && x > answer) {
      answer = x;
    } else if (sum > numSumMax) {
      numSumMax = sum;
      answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
