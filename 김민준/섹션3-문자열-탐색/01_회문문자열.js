function solution(INPUT) {
  let answer;
  INPUT = INPUT.toLowerCase();

  answer = INPUT === INPUT.split('').reverse().join('') ? 'YES' : 'NO';
  return answer;
}

const INPUT = 'gooG';
const result = solution(INPUT);
console.log(result);