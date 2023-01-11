function solution(N, arr) {
  let answer = 0;

  let max = 0;
  let cur = 0;
  for(let i=0; i<N; i+=1) {
    cur = arr[i];
    
    if(cur > max) {
      answer += 1;
      max = cur;
    }
  }

  return answer;
}

const N = 8;
const arr = [130, 135, 148, 140, 145, 150, 150, 153];
const result = solution(N, arr);
console.log(result);