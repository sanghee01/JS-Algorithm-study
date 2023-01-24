function isPrime(value) {
  if (value === 1) return false
  for (let i = 2; i < value; i +=1 ) {
    if (value % i === 0) {
      return false
    }  
  }
  return true
} 

function solution(num, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    let reversedNum = +String(arr[i]).split('').reverse().join('');
    if (isPrime(reversedNum)) {
      answer.push(reversedNum)
    }
  }
  return answer.join(' ');
}
  
const num = 9;
const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(num, arr));