function solution(val, arr) {
  let cnt = 0;
  // 수열의 첫번째 부분
  for (let i = 0; i < arr.length - 1; i++) {
    let cntVal = arr[i];
    // 수열의 뒷 부분
    for (let j = i + 1; j < arr.length; j++) {
      cntVal += arr[j];
      if (cntVal == val) {
        cnt += 1;
        break;
      } else if (cntVal > val) {
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]), 3);
