function solution(num, arr) {
  let max = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i += 1) {
    if (max < arr[i]) {
      max = arr[i];
      count += 1;
    }
  }
  return count;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
