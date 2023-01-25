function solution(val, arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let cnt = 0;
    let saleVal = val - (arr[i][0] / 2 + arr[i][1]);
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] <= saleVal) {
        val -= arr[j][0] + arr[j][1];
        cnt += 1;
      }
    }
    if (total < cnt) total = cnt;
  }
  return total;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
