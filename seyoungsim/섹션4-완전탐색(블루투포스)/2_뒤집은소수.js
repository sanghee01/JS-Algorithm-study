/**
 * 뒤집은 소수
 *
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 *
 * 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 * 각 자연수의 크기는 100,000를 넘지 않는다.
 */

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function solution(numbers) {
  let result = [];

  numbers.forEach((num) => {
    let reverseNum = Number([...String(num)].reverse().join(""));

    if (isPrime(reverseNum)) result.push(reverseNum);
  });

  return result;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // [ 23, 2, 73, 2, 3 ]

/**
 * 정답지 풀이
 */

// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       x = parseInt(x / 10);
//     }
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));
