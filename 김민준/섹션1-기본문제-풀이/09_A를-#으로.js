function solution(str) {
  return str.replaceAll('A', '#');
}

const str = 'BANANA';
const result = solution(str);
console.log(result);