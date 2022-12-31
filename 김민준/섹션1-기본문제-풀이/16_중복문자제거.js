function solution(str) {
  let set = new Set(str);
  let answer = [...set].join('');

  return answer;
}

const str = 'ksekkset';
const result = solution(str);
console.log(result);