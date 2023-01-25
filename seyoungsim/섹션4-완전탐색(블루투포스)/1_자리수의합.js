/**
 * 자릿수의 합
 *
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 *
 * 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 * 각 자연수의 크기는 10,000,000를 넘지 않는다.
 */

function solution(n, numbers) {
  let [result, max] = [0, 0];

  numbers.forEach((num) => {
    const sumOfDigits = [...String(num)].reduce((a, c) => a + Number(c), 0);

    if (sumOfDigits >= max) {
      max = sumOfDigits;
      result = num;
    }
  });

  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr)); // 137

/**
 * 정답지 풀이
 */

// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));
