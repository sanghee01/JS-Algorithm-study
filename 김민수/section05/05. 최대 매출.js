function solution(val, arr) {
  let rVal = 0;
  for (let i = 0; i < arr.length - val + 1; i += 1) {
    let cVal = arr[i];
    for (let j = i + 1; j < i + val; j += 1) {
      cVal += arr[j];
    }
    if (cVal > rVal) rVal = cVal;
  }
  return rVal;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]), 56);
