function solution(str, ch) {
  let cnt = 0;

  for(let i=0; i<str.length; i+=1) {
    if(str[i] === ch) cnt += 1;
  }

  return cnt;
}

const str = 'COMPUTERPROGRAMMING';
const ch = 'R';
const result = solution(str, ch);
console.log(result);