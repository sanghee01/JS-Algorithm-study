function solution(num, arr) {
  let sumEach = 0;
  let maxSum = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i += 1) {
      let target = String(arr[i]).split('')
    for (let j = 0; j < target.length; j += 1) {
      sumEach += parseInt(target[j])
    }
    
    if (sumEach > maxSum) {
      answer = arr[i];
      maxSum = sumEach;
    } else if (sumEach === maxSum) {
      answer = arr[i] > answer ? arr[i] : answer;
    }
    sumEach = 0;
  }
  return answer;
}
  
const num = 7;
const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(num, arr));
