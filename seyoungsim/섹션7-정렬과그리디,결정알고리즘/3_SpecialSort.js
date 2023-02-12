function solution(arr) {
  const array = [...arr];
  let idx = 0;

  for (let i = 0; i < array.length; i++) {
    // 음수일 때
    if (1 > Math.sign(array[i])) {
      const negative = array[i];

      // 음수의 자리까지, 앞의 숫자들을 하나씩 뒤로 보낸다.
      for (let j = i; j >= idx; j--) {
        array[j] = array[j - 1];
      }
      // 음수는 앞에서부터 넣고, 그 다음 음수가 올 인덱스 값을 올린다.
      array[idx] = negative;
      idx++;
    }
  }

  return array;
}

// 정답지 풀이들

// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));

// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         console.log(arr);
//       }
//     }
//   }
//   return answer;
// }

// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));

// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     if (x < 0) answer.push(x);
//   }
//   for (let x of arr) {
//     if (x > 0) answer.push(x);
//   }
//   return answer;
// }

// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));
