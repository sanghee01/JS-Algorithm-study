function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let nArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = parseInt(String(arr[i]).split("").reverse().join(""));
    if (isPrime(val)) nArr.push(val);
  }
  return nArr;
}

console.log(
  solution([32, 55, 62, 20, 250, 370, 200, 30, 100]),
  [23, 2, 73, 2, 3]
);
