function solution(target, arr) {
  let min = 0;
  let max = arr.length - 1;
  let median;

  arr.sort((a, b) => a - b);
  while (min <= max) {
    median = Math.floor((min + max) / 2);
    if (target > arr[median]) {
      min = median + 1;
    } else if (target < arr[median]) {
      max = median - 1;
    } else if (target === arr[median]) {
      return median + 1;
    } else {
      return "없는 값";
    }
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
