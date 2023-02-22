function solution(n) {
  if (n === 1) return '1';
  else {
    let quotient = parseInt(n / 2);
    let remainder = n % 2;
    return solution(quotient) + remainder.toString();
  }
}

console.log(solution(10));