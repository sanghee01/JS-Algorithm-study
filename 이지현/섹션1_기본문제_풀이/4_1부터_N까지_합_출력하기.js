function solution(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));

function solution2(number) {
  return (number * (number + 1)) / 2;
}

console.log(solution2(6));
console.log(solution2(10));
