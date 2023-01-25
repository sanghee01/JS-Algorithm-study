function solution(arr) {
  let answer = [];
  let cnt;
  arr = arr.map((x) => Number(x.toString().split("").reverse().join("")));

  for (let i = 0; i < arr.length; i++) {
    cnt = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] / j === Math.floor(arr[i] / j)) cnt++;
    }
    if (cnt === 2) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 강사 풀이 - 함수로 분리해서
function isPrime(num) {
  if (num === 1) return false;
  // 곱셈에서 반절은 동일하므로 제곱근 써줌(나누기 2해도 됨)
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    // 숫자 reverse 하는것을 직접 구현
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
