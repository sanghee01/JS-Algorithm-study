function solution(arr) {
  let answer = arr[0];

  for(let i=0; i<arr.length; i+=1) {
    if(arr[i] < answer) answer = arr[i];
  }

  return answer;
}

function solution2(arr) {
  return Math.min(...arr);
}

let arr = [5, 3, 7, 11, 2, 15, 17];
const result = solution(arr);
console.log(result);