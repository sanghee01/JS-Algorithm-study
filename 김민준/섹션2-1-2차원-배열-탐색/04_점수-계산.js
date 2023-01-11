function solution(N, arr) {
  let answer = 0;
  let score = 0;

  let cur = 0;
  for(let i=0; i<N; i+=1) {
    cur = arr[i];

    if(cur === 0) score = 0;
    else if(cur === 1) score += 1;

    answer += score;
  }

  return answer;
}

const N = 10;
const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
const result = solution(N, arr);
console.log(result);