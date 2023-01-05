function solution(arr) {
  let answer = [];
  let sum = 0;
  let min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      answer.push(arr[i]);
      sum += arr[i];
    }
  }
  min = Math.min(...answer);

  console.log(sum);
  console.log(min);
}

function solution2(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) {
        min = x;
      }
    }
  }

  console.log(sum);
  console.log(min);
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution2(arr));
