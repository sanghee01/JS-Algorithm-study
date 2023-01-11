function solution(str) {
  let start = Math.ceil(str.length / 2) - 1;
  let end = (str.length % 2 === 1 ? start : start + 1) + 1;

  return str.substring(start, end);
}

const str = 'study';
const result = solution(str);
console.log(result);