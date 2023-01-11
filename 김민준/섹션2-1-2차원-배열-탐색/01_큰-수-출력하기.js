function solution(N, arr) {
  let answer = [arr[0]];

  let [prev, cur] = [0, 0];
  for(let i=1; i<N; i+=1) {
    [prev, cur] = [arr[i-1], arr[i]];

    if(prev < cur) answer.push(cur);
  }

  return answer;
}

const N = 6;
const arr = [7, 3, 9, 5, 6, 12];
const result = solution(N, arr);
console.log(result);