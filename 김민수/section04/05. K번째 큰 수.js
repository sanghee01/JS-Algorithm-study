function solution(num, arr) {
  let nArr = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (!nArr.includes(arr[i] + arr[j] + arr[k]))
          nArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return nArr.sort((a, b) => b - a)[num - 1];
}
console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
