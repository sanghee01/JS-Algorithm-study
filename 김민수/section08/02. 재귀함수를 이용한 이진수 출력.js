function solution(n) {
  if (n === 1) return '1';
  else {
    let quotient = parseInt(n / 2);
    let remainder = n % 2;
    return solution(quotient) + remainder.toString();
  }
}

console.log(solution(10));

// 해석
// solution(10) => solution(5) + 0
// solution(5) => solution(2) + 1
// solution(2) => solution(1) + 0
// solution(1) => 1
// => 1010