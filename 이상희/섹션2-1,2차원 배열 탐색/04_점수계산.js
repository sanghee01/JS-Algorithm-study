function solution(arr) {
  let answer = 0;
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer += cnt;
      cnt++;
    } else {
      cnt = 1;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 1];
console.log(solution(arr));
