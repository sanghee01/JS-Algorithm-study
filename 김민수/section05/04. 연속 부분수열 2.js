function solution(val, arr) {
  // 연속부분수열이 1 자리일 경우 ex) 5이하 -> 1, 3, 1, 2, 3
  let cnt = arr.filter((e) => e <= val).length;
  // 연속부분수열이 2자리 이상일 경우 ex) 5이하 -> {1,3}, {1,3,1}, {3,1}, {1,2}, {2,3}
  for (let i = 0; i < arr.length - 1; i++) {
    let cntVal = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      cntVal += arr[j];
      if (cntVal <= val) {
        cnt += 1;
      } else {
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(5, [1, 3, 1, 2, 3]), 10);
