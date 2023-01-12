function solution(INPUT) {
  let result = 0;
  const REGEX = /[0-9]/g;

  result = parseInt(INPUT.match(REGEX).join(''));
  return result;
}

const INPUT = 'g0en2T0s8eSoft';
const result = solution(INPUT);
console.log(result);