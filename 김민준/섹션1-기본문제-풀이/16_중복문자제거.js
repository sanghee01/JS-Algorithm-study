function solution(str) {
  let answer = '';

  for(let i=0; i<str.length; i+=1) {
    if(str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

function solution2(str) {
  let set = new Set(str);
  let answer = [...set].join('');

  return answer;
}

const str = 'ksekkset';
const result = solution(str);
console.log(result);