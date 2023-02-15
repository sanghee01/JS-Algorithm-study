function solution(target, arr) {
  let answer;
  let min = 0;
  let max = arr.length - 1;
  let median;

  arr.sort((a, b) => a - b);
  while (min <= max) {
    median = Math.floor(max + min / 2);
    if (target === arr[median]) {
      answer = median + 1;
      return answer;
    } else if (target < arr[median]) max = median - 1;
    else min = median + 1;
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
