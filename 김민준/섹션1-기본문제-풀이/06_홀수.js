function isOddNumber(n) {
  return n % 2 === 1;
}

function solution(arr) {
  let sum = 0;
  let min = Math.max(...arr);

  let n = 0;
  for(let i=0; i<arr.length; i+=1) {
    n = arr[i];
    if(isOddNumber(n)) {
      sum += n;
      if(n < min) min = n;
    }
  }

  console.log(sum);
  console.log(min);
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);